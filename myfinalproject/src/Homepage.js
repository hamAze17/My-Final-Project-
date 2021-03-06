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
        <Container>
          <Link to="/SignUp">
            <Button>Sign up</Button>
          </Link>
          <Link to="/Main">
            <Button>Main</Button>
          </Link>
          <Link to="/SignIn">
            <Button>Sign In</Button>
          </Link>
        </Container>
        {/* <Img src={cinema} /> */}
        <Iframe
          width="1500"
          height="380"
          src="https://www.youtube.com/embed/lsgSGHyXRiE?autoplay=1&loop=1&playlist=lsgSGHyXRiE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
          allowFullScreen
        ></Iframe>
        <Img src={cinema} />
      </Wrapper>
      <p></p>

      <Footer />
    </>
  );
};
const Container = styled.div`
  //padding: 100px;
  display: flex;
  //margin: 10px;
  justify-content: space-between;
  background-color: #e50914;
`;
const Iframe = styled.iframe``;
const Wrapper = styled.div`
  background-image: url("img1.jpg");
  flex-wrap: wrap;
`;
const Button = styled.button`
  //display: flex;
  //margin-left: 1500px;

  width: 120px;
  height: 50px;
  background: #ff7a00;
  color: #fff;
  font-size: 20px;
  margin: 0 auto;
  text-align: center;
  border-radius: 3px;
  //color: yellow;
  //margin-left: 350px;
`;

const Img = styled.img`
  //max-width: 50%;
  height: 2000px;
  //width: 100px;
  //1100px;; ;
`;
const H1 = styled.h1`
  color: black;
  background-color: #e50914;
  text-align: center;
`;
export default Homepage;
