import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignOut from "./SignOut";
import { UserContext } from "./UserContext";

const SignIn = () => {
  let redirect = useNavigate();
  const [error, setError] = useState();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { signIn, setSignIn, setCurrentUser, currentUser } =
    useContext(UserContext);
  //add a confirmation page once the user
  //add a usercontext?

  // useEffect(() => {
  //   fetch(`http://localhost:8000/user/$`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setUser(data.email);
  //     });
  // }, [currentUser.email]);

  const logIn = async () => {
    setError("");
    try {
      const logged = await fetch(`http://localhost:8000/user`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
      });
      const json = await logged.json();

      console.log(json.data);
      if (json.status === 200) {
        //if the status is confirmed
        redirect("/Main");
      } else {
        setError(json.message);
        //console.log();
      }
    } catch (err) {
      return err;
    }
  };

  console.log(currentUser.email);
  const handleClick = (e) => {
    e.preventDefault();
    logIn();
    // window.alert("Welcome to the Movie Database ");

    //setSignIn(true);
    ///setCurrenUser("user");
    //redirect("/Main");
  };
  return (
    <Container>
      <Form>
        <h3>Sign In</h3>
        <label htmlFor="email">Email</label>
        <Input
          type="text"
          placeholder="Email"
          name="firstName"
          required
          onChange={(e) =>
            setCurrentUser({
              ...currentUser,
              email: e.target.value,
            })
          }
        />
        <label htmlFor="text">firstName</label>
        <Input
          type="text"
          name="fname"
          placeholder="First Name"
          required
          onChange={(e) =>
            setCurrentUser({
              ...currentUser,
              firstName: e.target.value,
            })
          }
        />
        <label htmlFor="text">lastName</label>
        <Input
          type="text"
          name="lname"
          required
          onChange={(e) =>
            setCurrentUser({
              ...currentUser,
              lastName: e.target.value,
            })
          }
        />
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          name="pass"
          required
          onChange={(e) =>
            setCurrentUser({
              ...currentUser,
              password: e.target.value,
            })
          }
        />

        <Button onClick={handleClick}>Log In</Button>
      </Form>
      <Error>{error}</Error>
      <SignOut />
    </Container>
  );
};

const Error = styled.div`
  color: red;
  font-weight: bold;
  margin-left: 400px;
`;
const Button = styled.button`
  background-color: red;
`;
const Input = styled.input``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  margin-left: 150px;
`;

const Container = styled.div`
  background-color: #22254b;
  height: 100vh;

  //background-color: green;
  //border: 4px solid blue;
  // background-color: #efefee;
`;

export default SignIn;
