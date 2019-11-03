import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import FatText from "./FatText";
import PropTypes from "prop-types";
import Button from "./Button";

const Card = styled.div`
  display: flex;
  justify-content: center;
`;

const UserCard = ({ username, isFollowing, url, isSelf }) => (
  <Card>
    <Avatar url={url} />
    <FatText text={username} />
    {!isSelf && <Button text={isFollowing ? "팔로우 취소" : "팔로우"} />}
  </Card>
);

UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  isSelf: PropTypes.bool.isRequired
};

export default UserCard;
