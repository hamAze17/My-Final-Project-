import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const body = `https://api.themoviedb.org/3/search/movie?api_key=93707bbd999b76530426a2e36710f747&query="${e.target.value}"`;

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(body)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  };
};

export default Add;
