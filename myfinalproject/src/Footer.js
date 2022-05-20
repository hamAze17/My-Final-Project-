import React from "react";
import styled from "styled-components";
import { BsFacebook, BsInstagram, BsSnapchat, BsTwitter } from "react-icons/bs";

const Footer = () => {
  //inspiration from e-commerce project
  const styleFacebook = { color: "#4267B2" };
  const styleInstagram = { color: "#DD2A7B" };
  const styleSnapchat = { color: "#FFFC00" };
  const styleTwitter = { color: "#1DA1F2" };
  return (
    <Wrapper>
      <H1>
        Movie Database<span>.</span>
      </H1>
      <Icons>
        <BsFacebook style={styleFacebook} />
        <BsInstagram style={styleInstagram} />
        <BsSnapchat style={styleSnapchat} />
        <BsTwitter style={styleTwitter} />
      </Icons>
      <Copyright>Copyright 2022 .All rights are reserved</Copyright>
    </Wrapper>
  );
};
const Icons = styled.div`
  text-align: center;
  font-size: 25px;
  margin-right: 5px;
`;
const H1 = styled.h1`
  text-align: center;
  color: white;
  padding-top: 80px;
`;

const Wrapper = styled.div`
  height: 260px;
  background-color: #444;
`;
const Copyright = styled.div`
  text-align: center;
  font-weight: bold;
  padding-top: 30px;
  color: #777;
`;
export default Footer;
