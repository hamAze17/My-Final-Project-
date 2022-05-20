import React, { useEffect, useState } from "react";
import { Link } from "react-dom";
import styled from "styled-components";
import Movie from "./Movie";
//import { fetchTopRatedMovies } from "../../server/server;

const Top = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [genreId, setGenreId] = useState();

  const addPage = () => {
    setPage(page + 1);
  };
  //const body = `https://api.themoviedb.org/3/movie/top_rated?api_key=93707bbd999b76530426a2e36710f747&page=${page}&with_genres=${genreId}`;

  useEffect(() => {
    // fetchData(page);
    // setMovies(moviesResponse);
    fetch(`http://localhost:8000/top?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data);
      });
  }, [page]);

  return (
    <Main>
      <Load onClick={addPage}>Next</Load>
      {movies.map((item, index) => {
        return <Movie key={item.id} {...item} />;
      })}
    </Main>
  );
};
const Main = styled.div`
  background-color: blue;
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
