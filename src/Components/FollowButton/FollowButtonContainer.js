import React, { useState } from "react";
import PropTypes from "prop-types";
import FollowButtonPresenter from "./FollowButtonPresenter";
import { FOLLOW, UNFOLLOW } from "./FollowButtonQueries";
import { useMutation } from "react-apollo-hooks";

const FollowButtonContainer = ({ isFollowing, id }) => {
  const [isFollowingS, setIsFollowing] = useState(isFollowing);
  const [followMutation] = useMutation(FOLLOW, { variables: { id } });
  const [unfollowMutation] = useMutation(UNFOLLOW, { variables: { id } });

  const onClick = () => {
    if (isFollowingS === true) {
      setIsFollowing(false);
      unfollowMutation();
    } else {
      setIsFollowing(true);
      followMutation();
    }
  };

  return <FollowButtonPresenter isFollowing={isFollowingS} onClick={onClick} />;
};

FollowButtonContainer.propTypes = {
  isFollowing: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};

export default FollowButtonContainer;
