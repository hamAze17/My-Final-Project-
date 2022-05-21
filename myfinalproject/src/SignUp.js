import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useHistory, useNavigate } from "react-router-dom";

const SignUp = () => {
  let redirect = useNavigate();
  const [error, setError] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    userName: "",
  });
  const [confirmation, setConfirmation] = useState({ data: "" });
  const addNewUser = async () => {
    try {
      const user = await fetch(`http://localhost:8000/SignUp`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const json = await user.json();
      //setConfirmation(json.data);
      console.log(json.data);
      if (json.status === 200) {
        //if the status is confirmed
        redirect("/SignIn");
      } else {
        setError(true);
      }
    } catch (err) {
      return err;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewUser();
    window.alert("Welcome to our movie database :) ");
  };
  return (
    <Container>
      <Col>
        <Form method="POST" onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={(e) =>
              setUserInfo({
                ...userInfo,
                firstName: e.target.value,
              })
            }
          />
          <Input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={(e) =>
              setUserInfo({
                ...userInfo,
                lastName: e.target.value,
              })
            }
          />
          <Input
            type="text"
            placeholder="User Name"
            name="userName"
            onChange={(e) =>
              setUserInfo({
                ...userInfo,
                userName: e.target.value,
              })
            }
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) =>
              setUserInfo({
                ...userInfo,
                email: e.target.value,
              })
            }
          />
          {/* <Input type="email" placeholder="Confirm Email" name="email2" /> */}
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setUserInfo({
                ...userInfo,
                password: e.target.value,
              })
            }
          />
          {/* <Input
            type="password"
            placeholder="Confirm Password"
            name="password2"
          /> */}
          <Button>SignUp</Button>
        </Form>
      </Col>
    </Container>
  );
};

const Input = styled.input`
  margin-bottom: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  margin-left: 150px;
`;
const Col = styled.div`
  //background-color: #fff;
  min-height: 300px;
  max-height: 100%;
  //width: 450px;
`;
const Container = styled.div`
  background-color: #22254b;
  //color: #22254b; //#efefee;
  //display: flex;
  height: 100vh;
`;
const Button = styled.button`
  background-color: red;
`;
export default SignUp;
