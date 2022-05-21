import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    // <Wrapper>
    //   <Container>
    //     <DIV>WatchList</DIV>
    //     <ul>
    //       <li>List</li>
    //       <li>Watched</li>
    //       <li>+Add</li>
    //     </ul>
    //   </Container>
    // </Wrapper>
    <header>
      <Wrapper>
        <Title>
          Movie DB<span class="Blue">.</span>
        </Title>
        <nav>
          <ul>
            <li>
              <a href="#main-image">Upcoming</a>
            </li>
            <li>
              <a href="#steps">Now Playing</a>
            </li>
            <li>
              <a href="#possibilities">Trending</a>
            </li>
            <li>
              <a href="#contact">Actors</a>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
};

const Title = styled.h2`
  float: left;
  margin-top: 32px;
`;
const Wrapper = styled.div`
  width: 940px;
  margin: 0 auto;
  padding: 0 10px;
`;
const DIV = styled.div``;
const Container = styled.div``;
export default MenuBar;
