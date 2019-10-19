import React from "react";
import { gql } from "apollo-boost";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import AppRouter from "./Router";
import { useQuery } from "react-apollo-hooks";
import Footer from "./Footer";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

const WrapFooter = styled.div`
  margin: 0 auto;
  max-width: 1012px;
  width: 100%;
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Wrapper>
        <AppRouter isLoggedIn={isLoggedIn} />
      </Wrapper>
      <WrapFooter>
        <Footer />
      </WrapFooter>
    </ThemeProvider>
  );
};
