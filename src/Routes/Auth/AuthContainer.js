import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import {
  LOG_IN,
  CREATE_ACCOUNT,
  CONFIRM_SECRET,
  LOCAL_LOG_IN
} from "./AuthQueries";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  const secret = useInput("");

  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: { email: email.value }
  });

  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      firstName: firstName.value,
      lastName: lastName.value,
      username: username.value,
      email: email.value
    }
  });

  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      secret: secret.value,
      email: email.value
    }
  });

  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

  const onSubmit = async e => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "") {
        try {
          const {
            data: { requestSecret }
          } = await requestSecretMutation();
          if (!requestSecret) {
            toast.error("계정이 없습니다.");
            setTimeout(() => setAction("signUp"), 2000);
          } else {
            toast.success("이메일에서 로그인 코드를 확인해주세요.");
            setAction("confirm");
          }
        } catch {
          toast.error("로그인 코드를 요청할 수 없습니다. 다시 시도해주세요.");
        }
      } else {
        toast.error("이메일을 입력해주세요.");
      }
    } else if (action === "signUp") {
      if (
        firstName !== "" &&
        lastName !== "" &&
        username !== "" &&
        email !== ""
      ) {
        try {
          const {
            data: { createAccount }
          } = await createAccountMutation();
          if (!createAccount) {
            toast.error("계정을 생성 할 수 없습니다.");
          } else {
            toast.success("계정이 생성되었습니다. 로그인 해주세요.");
            setTimeout(() => setAction("logIn"), 2000);
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        toast.error("모든 항목을 입력해주세요.");
      }
    } else if (action === "confirm") {
      if (secret.value !== "") {
        try {
          const {
            data: { confirmSecret: token }
          } = await confirmSecretMutation();
          if (token !== "" && token !== undefined) {
            localLogInMutation({ variables: { token } });
          } else {
            throw Error;
          }
        } catch {
          toast.error("로그인 코드를 확인 할 수 없습니다.");
        }
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
      secret={secret}
      onSubmit={onSubmit}
    />
  );
};
