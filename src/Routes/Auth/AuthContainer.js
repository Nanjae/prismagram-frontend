import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");

  const [requestSecret] = useMutation(LOG_IN, {
    update: (_, { data }) => {
      const { requestSecret } = data;
      if (!requestSecret) {
        toast.error("계정이 없습니다.");
        setTimeout(() => setAction("signUp", 2000));
      }
    },
    variables: { email: email.value }
  });

  const [createAccount] = useMutation(CREATE_ACCOUNT, {
    variables: {
      firstName: firstName.value,
      lastName: lastName.value,
      username: username.value,
      email: email.value
    }
  });

  const onSubmit = e => {
    e.preventDefault();
    if (action === "logIn") {
      if (email !== "") {
        requestSecret();
      } else {
        toast.error("이메일을 입력하세요.");
      }
    } else if (action === "signUp") {
      if (
        firstName !== "" &&
        lastName !== "" &&
        username !== "" &&
        email !== ""
      ) {
        createAccount();
      } else {
        toast.error("모든 항목을 입력하세요.");
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onSubmit={onSubmit}
    />
  );
};
