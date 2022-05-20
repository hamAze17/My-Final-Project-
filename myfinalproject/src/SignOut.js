import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  let redirect = useNavigate();
  const logOut = async () => {
    redirect("/");
    window.location.reload();
  };

  const handleLogOut = () => {
    logOut();
  };
  return (
    <Container>
      <button onClick={handleLogOut}>Sign Out</button>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: none;
  position: absolute;
  width: 120px;
  color: purple;
  align-items: center;
  top: -5px;
`;
export default SignOut;
