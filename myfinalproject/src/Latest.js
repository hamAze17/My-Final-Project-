import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "./UserContext";

const Latest = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  return (
    <>{currentUser && <H2>How are you doing {currentUser.firstName} ?</H2>}</>
  );
};
const H2 = styled.h2``;

export default Latest;
