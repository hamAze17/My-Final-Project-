import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "./UserContext";

const Latest = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  <>
    <H2>How are you doing {currentUser}</H2>
  </>;
};
const H2 = styled.h2``;

export default Latest;
