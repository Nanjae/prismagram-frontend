import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  min-height: 30px;
  font-size: 14px;
  font-weight: 600;
  padding: 7px;
  ${props => props.theme.whiteBox};
  background-color: ${props => props.theme.blueColor};
  color: white;
  cursor: pointer;
`;

const Button = ({ text, className }) => (
  <Container className={className}>{text}</Container>
);

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;
