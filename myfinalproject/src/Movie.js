import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main";
import FeedBack from "./FeedBack";
import { WatchContext } from "./WatchContext";

const Movie = ({ movie }) => {
  const IMG_API = "https://image.tmdb.org/t/p/w1280/";
  const [favorites, setFavorites] = useState([]);
  const {
    overview,
    title,
    poster_path,
    vote_average,
    release_date,
    genre_ids,
  } = movie;

  //USING THE WATCHLIST CONTEXT
  const { watchList, addToWatchList, setFav, fav } = useContext(WatchContext);

  const addFavoriteMovie = (movietest) => {
    addToWatchList(movietest);
  };

  function getColor(vote) {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }
  return (
    <Wrapper>
      <Link to="/FeedBack">
        <h1>{title}</h1>
      </Link>

      <Img src={IMG_API + poster_path} alt={title} />
      <h2>Release Date: </h2>
      <h2>{release_date}</h2>
      <Container>
        <h2>Overview:</h2>
        <Overview>{overview}</Overview>
      </Container>
      <h2>Genres:</h2>
      <P>
        {genre_ids.map((id) => {
          //console.log(id);
          return getGenre(id);
        })}
      </P>
      <H5>Rating:</H5>
      <Vote style={{ color: `${getColor(vote_average)}` }}>{vote_average}</Vote>
      <Button onClick={() => addFavoriteMovie(movie)}>
        Add to my WishList +
      </Button>
    </Wrapper>
  );
};
//get color of rating
function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
//get genre of movies
function getGenre(genre) {
  if (genre === 28) {
    return "Action";
  } else if (genre === 12) {
    return "Adventure";
  } else if (genre === 35) {
    return "Comedy";
  } else if (genre === 99) {
    return "Documentary";
  } else if (genre === 18) {
    return "Drama";
  } else if (genre === 10751) {
    return "Family";
  } else if (genre === 14) {
    return "Fantasy";
  } else if (genre === 80) {
    return "Crime";
  } else if (genre === 16) {
    return "Animation";
  } else if (genre === 37) {
    return "Western";
  } else if (genre === 10752) {
    return "War";
  } else if (genre === 53) {
    return "Thriller";
  } else if (genre === 10770) {
    return "TV Movie";
  } else if (genre === 878) {
    return "Science Fiction";
  } else if (genre === 10402) {
    return "Music";
  } else if (genre === 27) {
    return "Horror";
  } else if (genre === 9648) {
    return "Mystery";
  } else if (genre === 10749) {
    return "Romance";
  } else if (genre === 37) {
    return "History";
  }
}

const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  background: linear-gradient(to bottom right, #b8d7ff, #8eb7eb);
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-family: "Open Sans";
  font-weight: 600;
  color: green;
  margin-bottom: 5px;
`;
const H5 = styled.h5`
  margin-left: 100px;
`;
const P = styled.p`
  color: white;
  padding: 10px 20px;
  background-color: orange;
  border-radius: 50px;
  margin: 5px;
  word-spacing: 25px;
`;
const Container = styled.div`
  //background-color: #fff;
  color: #22254b;
  padding: 1rem;
  //position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* transform: translateX(100%);
  transition: transform 0.3s ease-in-out; */
`;
const Vote = styled.div`
  //color: ${getColor(6)};
  font-weight: bold;
  border-radius: 3px;
  padding: 0.25rem 00.5rem;
  margin-left: 100px;
`;
const Wrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  width: 300px;
  margin: 16px;

  /* :hover {
    transform: translateX(0%);
  } */
`;
const Overview = styled.p`
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem 1rem;
  letter-spacing: 0.5px;
`;
const Img = styled.img`
  max-width: 100%;

  //width: 300px;

  //margin-left: 400px;
`;

export default Movie;
