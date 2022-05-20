import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Reviews = () => {
  //fetch the getfeedback of the users
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/feedback")
      .then((res) => res.json())
      .then((json) => {
        setFeeds(json.data.listFeed);
      });
  }, []);
  return (
    <Main>
      {feeds.map((feed) => (
        <Wrapper feed={feed.id}>
          <Title>Review : </Title>

          <Info>Email#:{feed.email}</Info>
          <Info>
            Name#:{feed.firstName} {feed.lastName}
          </Info>
          <Info>Feedback:{feed.feedBack}</Info>
        </Wrapper>
      ))}
    </Main>
  );
};

const Main = styled.div`
  display: block;
  overflow: auto;
`;
const Wrapper = styled.div`
  background-color: #22254b;
  border: 4px var(--color-alabama-crimson) solid;
`;
const Title = styled.h2`
  color: #aa001e;
`;

const Info = styled.div`
  text-align: center;
  color: black;
  padding: 10px;
`;
export default Reviews;
