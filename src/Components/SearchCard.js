import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import FatText from "./FatText";
import PropTypes from "prop-types";
import Button from "./Button";
import { Link } from "react-router-dom";

const Card = styled.div`
  ${props => props.theme.whiteBox}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const FollowButton = styled(Button)`
  width: 65px;
  height: 30px;
  padding: 5px 8px;
`;

const ELink = styled(Link)`
  margin-bottom: 20px;
  color: inherit;
`;

const UserCard = ({ username, isFollowing, url, isSelf }) => (
  <Card>
    <ELink to={`/${username}`}>
      <Avatar url={url} size="md" />
    </ELink>
    <ELink to={`/${username}`}>
      <FatText text={username} />
    </ELink>
    {isSelf && <FollowButton text={isFollowing ? "팔로우 취소" : "팔로우"} />}
  </Card>
);

UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  isSelf: PropTypes.bool.isRequired
};

export default UserCard;
