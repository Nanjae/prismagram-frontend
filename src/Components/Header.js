import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { gql } from "apollo-boost";
import { Logo, Compass, HeartEmpty, User } from "./Icons";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import { useQuery } from "react-apollo-hooks";

const Header = styled.header`
  background-color: white;
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  margin-bottom: 60px;
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

const ME = gql`
  {
    me {
      username
    }
  }
`;

export default withRouter(({ history }) => {
  const search = useInput("");
  const { data } = useQuery(ME);
  const onSearchSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/">
            <Logo />
          </Link>
        </HeaderColumn>
        <HeaderColumn>
          <form onSubmit={onSearchSubmit}>
            <SearchInput {...search} placeholder="검색" />
          </form>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderLink to="/explore">
            <Compass />
          </HeaderLink>
          <HeaderLink to="/notifications">
            <HeartEmpty />
          </HeaderLink>
          {!(data && data.me) ? (
            <HeaderLink to="/#">
              <User />
            </HeaderLink>
          ) : (
            <HeaderLink to={data.me.username}>
              <User />
            </HeaderLink>
          )}
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});
