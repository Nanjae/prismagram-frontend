import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";

const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          username
        }
      }
      createdAt
      updatedAt
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 60vh;
`;

export default () => {
  const { data, loading } = useQuery(FEED_QUERY);
  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else {
    return <Wrapper></Wrapper>;
  }
};
