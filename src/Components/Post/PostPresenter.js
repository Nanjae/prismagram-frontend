import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";
import { HeartFull, HeartEmpty, Comment } from "../Icons";
import Avatar from "../Avatar";
import FatText from "../FatText";

const Post = styled.div`
  ${props => props.theme.whiteBox};
  width: 100%;
  max-width: 610px;
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
  padding-bottom: 400px;
`;

const File = styled.div`
  position: absolute;
  top: 0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  max-width: 100%;
  width: 100%;
  height: 400px;
  opacity: ${props => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

const Button = styled.span`
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  color: ${props => props.theme.blueColor};
  font-weight: 600;
  padding-left: 10px;
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

const TimeStamp = styled.span`
  padding-top: 10px;
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
  setIsLiked,
  setLikeCount,
  currentItem
}) => {
  return (
    <Post>
      <Header>
        <Avatar size="sm" url={avatar} />
        <UserColumn>
          <FatText text={username} />
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
          <Button>{isLiked ? <HeartFull /> : <HeartEmpty />}</Button>
          <Button>
            <Comment />
          </Button>
        </Buttons>
        <FatText text={`${likeCount}명이 좋아합니다`} />
        <TimeStamp>{createdAt}</TimeStamp>
      </Meta>
      <TextAreaWrapper>
        <TextArea placeholder={"댓글 달기..."} value={newComment.value} />
        <SubmitButton>게시</SubmitButton>
      </TextAreaWrapper>
    </Post>
  );
};
