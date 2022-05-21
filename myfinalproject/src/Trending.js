import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import styled from "styled-components";
import Header from "./Header";

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/trending`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data);
      });
  }, []);
  return (
    <Main>
      <Header />
      <P>
        Get the daily or weekly trending items. The daily trending list tracks
        items over the period of a day while items have a 24 hour half life. The
        weekly list tracks items over a 7 day period, with a 7 day half life.
      </P>
      {movies.length > 0 &&
        movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
    </Main>
  );
};
const P = styled.p`
  color: White;
`;
const Main = styled.div`
  background-color: #22254b;
`;
export default Trending;
