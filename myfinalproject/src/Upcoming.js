import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import styled from "styled-components";
import Header from "./Header";
const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const addPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetch(`http://localhost:8000/upcoming?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data);
      });
  }, [page]);
  return (
    <Main>
      <Header />
      <Load onClick={addPage}>Next</Load>
      {movies.map((item, index) => {
        return <Movie key={item.id} movie={item} />;
      })}
    </Main>
  );
};
const Main = styled.div`
  background-color: #22254b;
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
  margin-left: 150px;
`;

export default Upcoming;
