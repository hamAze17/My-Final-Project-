import React, { useEffect, useState } from "react";
import { Link } from "react-dom";
import styled from "styled-components";
import Header from "./Header";
import Movie from "./Movie";

const Top = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [genreId, setGenreId] = useState();

  const addPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetch(`http://localhost:8000/top?page=${page}`)
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
export default Top;
