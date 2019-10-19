import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Components/Input";
import Button from "../Components/Button";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox};
  border-radius: 1px;
  width: 350px;
  min-height: 50px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 25px 0px;
`;

const Form = styled(Box)`
  margin-bottom: 12px;
  padding: 40px;
  padding-bottom: 25px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
    button {
      width: 100%;
      margin-top: 6px;
    }
  }
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  font-weight: 700;
  cursor: pointer;
`;

export default () => {
  const [action, setAction] = useState("logIn");

  return (
    <Wrapper>
      <Form>
        {action === "logIn" ? (
          <form>
            <Input placeholder="사용자 이름" />
            <Input placeholder="비밀번호" />
            <Button text="로그인" />
          </form>
        ) : (
          <form>
            <Input placeholder="성" />
            <Input placeholder="이름" />
            <Input placeholder="이메일" />
            <Input placeholder="사용자 이름" />
            <Input placeholder="비밀번호" />
            <Button text="가입" />
          </form>
        )}
      </Form>
      <StateChanger>
        {action === "logIn" ? (
          <>
            계정이 없으신가요?{" "}
            <Link onClick={() => setAction("signUp")}>가입하기</Link>
          </>
        ) : (
          <>
            계정이 있으신가요?{" "}
            <Link onClick={() => setAction("logIn")}>로그인</Link>
          </>
        )}
      </StateChanger>
    </Wrapper>
  );
};
