import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import styled from "styled-components";

const Trending = () => {
  const [movies, setMovies] = useState([]);

  // const body = `https://api.themoviedb.org/3/trending/all/day?api_key=93707bbd999b76530426a2e36710f747`;
  useEffect(() => {
    fetch(`http://localhost:8000/trending`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data);
      });
  }, []);
  return (
    <Main>
      <P>
        Get the daily or weekly trending items. The daily trending list tracks
        items over the period of a day while items have a 24 hour half life. The
        weekly list tracks items over a 7 day period, with a 7 day half life.
      </P>
      {movies.length > 0 &&
        movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}
    </Main>
  );
};
const P = styled.p`
  color: White;
`;
const Main = styled.div`
  background-color: blue;
`;
export default Trending;
