import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";
import { HeartFull, HeartEmpty, CommentEmpty } from "../Icons";
import Avatar from "../Avatar";
import FatText from "../FatText";
import { Link } from "react-router-dom";

const Post = styled.div`
  ${props => props.theme.whiteBox};
  width: 100%;
  max-width: 610px;
  user-select: none;
  height: fit-content;
  a {
    color: inherit;
  }
`;

const Header = styled.header`
  padding-left: 15px;
  display: flex;
  align-items: center;
  height: 60px;
`;

const UserColumn = styled.div`
  padding-left: 15px;
  display: flex;
  flex-direction: column;
`;

const Location = styled.span``;

const Files = styled.div`
  position: relative;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
  padding-bottom: 75%;
`;

const File = styled.div`
  position: absolute;
  top: 0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  max-width: 100%;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

const Button = styled.span`
  cursor: pointer;
`;

const CanSubmitButton = styled(Button)`
  color: ${props => props.theme.blueColor};
  font-weight: 600;
  padding-left: 10px;
`;

const CannotSubmitButton = styled(Button)`
  opacity: 0.5;
  color: ${props => props.theme.blueColor};
  font-weight: 600;
  padding-left: 10px;
  cursor: unset;
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 15px;
`;

const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

const TimeStamp = styled.div`
  padding-top: 6px;
  font-size: 10px;
  color: ${prop => prop.theme.greyColor};
`;

const TextAreaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  min-height: 50px;
  padding: 0px 15px;
`;

const TextArea = styled(TextareaAutosize)`
  border-width: 0px;
  width: 530px;
  max-height: 80px;
  resize: none;
  font-size: 14px;
  padding: 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: ${props => props.theme.greyColor};
  outline: none;
  :focus {
    color: black;
  }
`;

const Comments = styled.ul``;

const Comment = styled.li`
  padding-top: 6px;
`;

const Caption = styled.div`
  padding-top: 6px;
`;

const CaptionComments = styled.div`
  padding-top: 6px;
`;

export default ({
  location,
  caption,
  user: { username, avatar },
  files,
  likeCount,
  isLiked,
  comments,
  createdAt,
  newComment,
  currentItem,
  toggleLike,
  onKeyPress,
  selfComments,
  onSubmit
}) => {
  return (
    <Post>
      <Header>
        <Avatar size="sm" url={avatar} />
        <UserColumn>
          <Link to={`/${username}`}>
            <FatText text={username} />
          </Link>
          <Location>{location}</Location>
        </UserColumn>
      </Header>
      <Files>
        {files &&
          files.map((file, index) => (
            <File
              key={file.id}
              id={file.id}
              src={file.url}
              showing={index === currentItem}
            />
          ))}
      </Files>
      <Meta>
        <Buttons>
          <Button onClick={toggleLike}>
            {isLiked ? <HeartFull /> : <HeartEmpty />}
          </Button>
          <Button>
            <CommentEmpty />
          </Button>
        </Buttons>
        <FatText text={`좋아요 ${likeCount}개`} />
        <CaptionComments>
          {caption && (
            <Caption>
              <Link to={`/${username}`}>
                <FatText text={username} />
              </Link>{" "}
              {caption}
            </Caption>
          )}
          {comments && (
            <Comments>
              {comments.map(comment => (
                <Comment key={comment.id}>
                  <Link to={`/${comment.user.username}`}>
                    <FatText text={comment.user.username} />
                  </Link>{" "}
                  {comment.text}
                </Comment>
              ))}
              {selfComments.map(comment => (
                <Comment key={comment.id}>
                  <Link to={`/${comment.user.username}`}>
                    <FatText text={comment.user.username} />
                  </Link>{" "}
                  {comment.text}
                </Comment>
              ))}
            </Comments>
          )}
          <TimeStamp>{createdAt}</TimeStamp>
        </CaptionComments>
      </Meta>
      <TextAreaWrapper>
        <TextArea
          placeholder={"댓글 달기..."}
          value={newComment.value}
          onChange={newComment.onChange}
          onKeyPress={onKeyPress}
        />
        {newComment.value === "" ? (
          <CannotSubmitButton>게시</CannotSubmitButton>
        ) : (
          <CanSubmitButton onClick={onSubmit}>게시</CanSubmitButton>
        )}
      </TextAreaWrapper>
    </Post>
  );
};
