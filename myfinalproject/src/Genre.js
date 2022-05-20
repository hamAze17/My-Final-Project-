import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Genre = () => {
  const API_KEY = "93707bbd999b76530426a2e36710f747";
  const listgenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    fetch(listgenre)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGenres(data);
      });
  }, []);

  return <></>;
};

export default Genre;
