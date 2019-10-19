import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.input`
  ${props => props.theme.whiteBox};
  background-color: ${props => props.theme.bgColor};
  height: 35px;
  font-size: 12px;
  padding: 0px 13px;
`;

const Input = ({ placeholder }) => <Container placeholder={placeholder} />;

Input.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default Input;
