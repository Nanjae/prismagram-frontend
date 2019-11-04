import React from "react";
import styled from "styled-components";
import Button from "../Button";

const FButton = styled(Button)`
  min-width: 100px;
  height: 30px;
  padding: 5px 8px;
`;

export default ({ isFollowing, onClick }) => {
  return (
    <FButton onClick={onClick} text={isFollowing ? "팔로우 취소" : "팔로우"} />
  );
};
