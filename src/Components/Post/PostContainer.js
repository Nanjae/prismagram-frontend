import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useInput from "../Input";
import PostPresenter from "./PostPresenter";

const PostContainer = ({
  id,
  location,
  caption,
  user,
  files,
  likeCount,
  isLiked,
  comments,
  createdAt
}) => {
  const [isLikedS, setIsLiked] = useState(isLiked);
  const [likeCountS, setLikeCount] = useState(likeCount);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const slide = () => {
      const totalFiles = files.length;
      if (currentItem === totalFiles - 1) {
        setTimeout(() => setCurrentItem(0), 2000);
      } else {
        setTimeout(() => setCurrentItem(currentItem + 1), 2000);
      }
    };
    slide();
  }, [currentItem, files]);

  const comment = useInput("");
  return (
    <PostPresenter
      location={location}
      caption={caption}
      user={user}
      files={files}
      likeCount={likeCountS}
      isLiked={isLikedS}
      comments={comments}
      createdAt={createdAt}
      newComment={comment}
      setIsLiked={setIsLiked}
      setLikeCount={setLikeCount}
      currentItem={currentItem}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  location: PropTypes.string,
  caption: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired
  }).isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  likeCount: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
      }).isRequired,
      createdAt: PropTypes.string.isRequired
    })
  ).isRequired,
  createdAt: PropTypes.string.isRequired
};

export default PostContainer;