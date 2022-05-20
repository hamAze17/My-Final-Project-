import React, { useState, useReducer, useEffect, useContext } from "react";
import styled from "styled-components";
import Movie from "./Movie";
import { WatchContext } from "./WatchContext";

const WishList = () => {
  const { watchlist, fav, setFav } = useContext(WatchContext);
  console.log(watchlist);
  return (
    <>
      <Wrapper>
        {watchlist.map((movie) => {
          return <Movie movie={movie} />;
        })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: darkblue;
`;
export default WishList;
