import React, { useState, useReducer, useEffect, useContext } from "react";
import styled from "styled-components";
import Header from "./Header";
import Movie from "./Movie";
import { WatchContext } from "./WatchContext";

const WishList = () => {
  const { watchlist, fav, setFav } = useContext(WatchContext);
  console.log(watchlist);
  return (
    <MainW>
      <Header />
      <Wrapper>
        {watchlist.map((movie) => {
          return <Movie movie={movie} />;
        })}
      </Wrapper>
    </MainW>
  );
};
const MainW = styled.div`
  background-color: #22254b;
`;
const Wrapper = styled.div`
  background-color: #22254b;
`;
export default WishList;
