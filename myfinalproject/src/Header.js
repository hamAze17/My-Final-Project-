import React from "react";
import styled from "styled-components";
import { FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";
//react -icons
const Header = () => {
  return (
    <Wrapper>
      {/* <nav>
        <Ul>
          <Li>
            <FaBeer />
            Action
          </Li>
          <Li>Adventure</Li>
          <Li>Romance</Li>
          <Li>Comedy</Li>
        </Ul>
      </nav> */}
      <Link to="/WishList">
        <Button>WatchList</Button>
      </Link>
      <Link to="/Top">
        <Button>Top Rated</Button>
      </Link>
      <Link to="/Trending">
        <Button>Trending</Button>
      </Link>
      <Link to="/Actors">
        <Button>Actors</Button>
      </Link>
      <Link to="/Nowplaying">
        <Button>Nowplaying</Button>
      </Link>
      <Link to="/Reviews">
        <Button>Reviews</Button>
      </Link>
      <Link to="/Upcoming">
        <Button>Upcoming movies</Button>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #22254b;
`;

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
  color: #202020;
  margin-bottom: 5px;
`;
const Ul = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
`;

const Li = styled.li`
  color: white;
  padding: 10px 20px;
  background-color: orange;
  border-radius: 50px;
  margin: 5px;
`;
export default Header;
