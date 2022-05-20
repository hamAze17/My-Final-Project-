import React from "react";
import styled from "styled-components";

const Biography = ({
  birthday,
  also_known_as,
  name,
  known_for_department,
  place_of_birth,
  profile_path,
  popularity,
  biography,
}) => {
  const IMG_API = "https://image.tmdb.org/t/p/w1280/";

  return (
    <Wrapper>
      <h1>{name}</h1>
      <p>{also_known_as}</p>
      <p>{known_for_department}</p>
      {/* <Img src={IMG_API + profile_path} /> */}
      <h2>{birthday}</h2>
      <h2>{place_of_birth}</h2>
      <Container>
        <h2>Biography:</h2>
        <Overview>{biography}</Overview>
      </Container>

      <h5>popularity:</h5>
      <Vote>{popularity}</Vote>
    </Wrapper>
  );
};

const Container = styled.div`
  //background-color: #fff;
  color: #22254b;
  padding: 1rem;
  //position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* transform: translateX(100%);
  transition: transform 0.3s ease-in-out; */
`;
const Vote = styled.div`
  font-weight: bold;
  border-radius: 3px;
  padding: 0.25rem 00.5rem;
`;
const Wrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  width: 300px;
  margin: 16px;

  /* :hover {
    transform: translateX(0%);
  } */
`;
const Overview = styled.p`
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 1rem;
  letter-spacing: 0.5px;
`;
const Img = styled.img`
  max-width: 100%;

  //width: 300px;

  //margin-left: 400px;
`;

export default Biography;
