import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import styled from "styled-components";

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const body = `https://api.themoviedb.org/3/movie/upcoming?api_key=93707bbd999b76530426a2e36710f747&language=en-US&page=${page}`;

  const addPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetch(body)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, [page]);
  return (
    <Container>
      <Load onClick={addPage}>Next</Load>
      {movies.map((item, index) => {
        return <Movie key={item.id} {...item} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  background-color: #373b69;
  box-shadow: 0.2px 4px 5px rgba(0, 0, 0, 0.1);
`;
const Load = styled.button`
  font-size: 14px;
  font-family: inherit;
  font-weight: 800;
  border-radius: 30px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0, 0.08);
  border: 0;
  background-color: #ff5e57;
  cursor: pointer;
  color: #fff;
  display: flex;
  padding: 12px 0;
`;

export default NowPlaying;
