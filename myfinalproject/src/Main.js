import React, { useEffect, useState } from "react";
import styled from "styled-components";
import cinema from "../src/images/cinema.jpg";
import Movie from "./Movie";
import Header from "./Header";
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";
import fox from "../src/Videos/20th Century Fox Intro Logo   HD.mp4";
import Upcoming from "./Upcoming";
import MenuBar from "./MenuBar";
import { Link } from "react-router-dom";
import Genre from "./Genre";
import { useContext } from "react";
import { WatchContext } from "./WatchContext";
import Latest from "./Latest";

const Main = () => {
  //getgenres

  const { currentUser, setCurrentUser } = useContext(WatchContext);

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [page, setPage] = useState(1);

  const addPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  //const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=93707bbd999b76530426a2e36710f747&query="${searchValue}"`;

  useEffect(() => {
    // const response = await fetch(body);
    // const moviesResponse = await response.json();
    // setMovies(moviesResponse);
    //body
    fetch(`http://localhost:8000/movies?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.data);
        // const getFav = () => {
        //   data.data.map((movie) => {
        //     return movie;
        //   });
        // };
        // setFav(getFav);
      });
  }, [page]); //page

  const addFavoriteMovie = () => {
    const favoriteList = [...favorites, movies];
    setFavorites(favoriteList);
  };

  const searchMovie = (e) => {
    e.preventDefault();

    // const response = await fetch(body);
    // const moviesResponse = await response.json();
    // setMovies(moviesResponse);
    fetch(`http://localhost:8000/search?query=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data);
      });
    setSearchValue(" ");
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  //onSubmit={searchMovie}
  return (
    <Wrapper>
      <form id="form">
        <Input
          type="text"
          placeholder="search"
          id="search"
          className="search"
          onChange={handleChange}
        />
        <Button onClick={searchMovie}>search</Button>
        {/* <MenuBar /> */}
        <Latest />
        <Header />
        <Genre />
      </form>
      {/* <video width="400" controls>
        <source src={fox} />
      </video> */}
      <Pagination>
        <Page onClick={previousPage}>Previous page</Page>
        <Current>{page}</Current>
        <Page onClick={addPage}>Next page</Page>
      </Pagination>
      ``
      <Container>
        {movies.length > 0 &&
          movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
      </Container>
      {/* <main id="main">
        <div class="movie">
          <img src={cinema} />
          <div className="movie-info">
            <h3>Movie Title</h3>
            <span class="green">9</span>
          </div>
        </div>
        <div class="over">Lorem ipsum</div>
      </main> */}
    </Wrapper>
  );
};
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  background-color: transparent;
  border: 2px solid #22254b;
  padding: 0.5rem 1rem;

  border-radius: 50px;
  font-size: 1rem;
  color: #fff;
  font-family: inherit;
  :focus {
    outline: 0;
    background-color: #22254b;
  }
`;
const Pagination = styled.div`
  display: flex;
  margin: 10px 30px;
  align-items: center;
  justify-content: center;
  color: white;
`;
const Page = styled.button`
  //not a div
  padding: 20px;
`;

const Wrapper = styled.div`
  // width: 300px;
  //margin: 16px;

  border-radius: 3px;
  position: relative;
  overflow: hidden;
  background-color: #373b69;
  box-shadow: 0.2px 4px 5px rgba(0, 0, 0, 0.1);
`;

const Current = styled.div`
  border-radius: 50%;
  padding: 10px 20px;
  border: 5px solid orange;
  font-size: 20px;
  font-weight: 600;
`;

const Button = styled.button`
  background-color: purple;
  color: #fff;
  border-radius: 35%;
  padding: 10px;
`;
export default Main;
