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
      <Button onClick={handleLogOut}>Sign Out</Button>
    </Container>
  );
};

const Button = styled.button`
  background-color: #ff7a00;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: none;
  //position: absolute;
  width: 120px;
  color: white;
  align-items: center;
  //top: -5px;
  margin-left: 500px;
  //justify-content: space-between;
  background-color: orange;
`;
export default SignOut;
