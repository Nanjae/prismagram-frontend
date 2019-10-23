import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Instagram, Compass, HeartEmpty, User } from "./Icons";
import Input from "./Input";
import useInput from "../Hooks/useInput";

const Header = styled.header`
  background-color: white;
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
`;

const HeaderWrapper = styled.div`
  max-width: 970px;
  height: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const SearchInput = styled(Input)`
  text-align: center;
  height: auto;
  padding: 4px;
  font-size: 14px;
  width: 70%;
  &::placeholder {
    opacity: 0.8;
  }
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export default () => {
  const search = useInput("");
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/">
            <Instagram />
          </Link>
        </HeaderColumn>
        <HeaderColumn>
          <SearchInput {...search} placeholder="검색" />
        </HeaderColumn>
        <HeaderColumn>
          <HeaderLink to="/explore">
            <Compass />
          </HeaderLink>
          <HeaderLink to="/notifications">
            <HeartEmpty />
          </HeaderLink>
          <HeaderLink to="/username">
            <User />
          </HeaderLink>
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
};
