import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <Wrapper>
      <Container>
        <DIV>WatchList</DIV>
        <ul>
          <li>List</li>
          <li>Watched</li>
          <li>+Add</li>
        </ul>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const DIV = styled.div``;
const Container = styled.div``;
export default MenuBar;
