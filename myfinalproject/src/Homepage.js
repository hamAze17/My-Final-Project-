import React from "react";
import styled from "styled-components";
import moment from "moment";
import img1 from "../src/images/img1.jpg";
import cinema from "../src/images/cinema.jpg";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import SignOut from "./SignOut";

const Homepage = () => {
  const { signIn, setSignIn } = useContext(UserContext);
  //add an arrow img/button so it can go to the main page
  return (
    <>
      <H1>WELCOME TO MY MOVIE DATABASE </H1>
      <Wrapper>
        <Link to="/SignUp">
          <Button>Sign up</Button>
        </Link>
        <Link to="/Main">
          <Button>Main</Button>
        </Link>
        <Link to="/SignIn">
          <Button>Sign In</Button>
        </Link>
        <Img src={cinema} />
        <iframe
          width="550"
          height="380"
          src="https://www.youtube.com/embed/lsgSGHyXRiE?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
          allowFullScreen
        ></iframe>
        <SignOut />
      </Wrapper>
      <p></p>
      <Img src={img1} />
      <Footer />
    </>
  );
};
const Wrapper = styled.div`
  background-image: url(cinema);
`;
const Button = styled.button`
  color: yellow;
  margin-left: 350px;
`;

const Img = styled.img`
  max-width: 50%;
  //height: 1000px;
`;
const H1 = styled.h1`
  color: black;
  background-color: #e50914;
  text-align: center;
`;
export default Homepage;
