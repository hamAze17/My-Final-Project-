import React, { useState } from "react";
import styled from "styled-components";
import SignOut from "./SignOut";
import cinema from "../src/images/cinema.jpg";
import { useNavigate } from "react-router-dom";

const FeedBack = () => {
  const [error, setError] = React.useState(false);
  const [feedBackInfo, setFeedBackInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    feedBack: "",
  });
  let redirect = useNavigate();
  //add a new feedback
  const addFeedback = async () => {
    try {
      const feedback = await fetch(`http://localhost:8000/feedback/${1}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-Type": "application/json",
        },
        body: JSON.stringify(feedBackInfo),
      });
      const json = await feedback.json();

      if (json.status === 200) {
        redirect("/Main");
      } else {
        setError(true);
      }
    } catch (err) {
      return err;
    }
  };

  //add a confirmation page once the user add the feedback
  const handleClick = (e) => {
    e.preventDefault();
    addFeedback();
    window.alert(
      "Thank for your feedback,Your review is important to us it will be added to our database :) "
    );
  };
  return (
    <Container>
      <Form>
        <label htmlFor="email">Email</label>
        <Input
          type="text"
          name="email"
          required
          onChange={(e) =>
            setFeedBackInfo({
              ...feedBackInfo,
              email: e.target.value,
            })
          }
        />
        <label htmlFor="name">firstName</label>
        <Input
          type="text"
          name="firstname"
          required
          onChange={(e) =>
            setFeedBackInfo({
              ...feedBackInfo,
              firstName: e.target.value,
            })
          }
        />
        <label htmlFor="last">lastName</label>
        <Input
          type="text"
          name="lastname"
          required
          onChange={(e) =>
            setFeedBackInfo({
              ...feedBackInfo,
              lastName: e.target.value,
            })
          }
        />
        <label htmlFor="email">FeedBack</label>
        <Input
          type="text"
          name="feedBack"
          required
          onChange={(e) =>
            setFeedBackInfo({
              ...feedBackInfo,
              feedBack: e.target.value,
            })
          }
        />
        {/* <textarea
          onChange={(e) =>
            setFeedBackInfo({
              ...feedBackInfo,
              feedBack: e.target.value,
            })
          }
        >
          Feedback
        </textarea> */}
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        {/* <Input type="file" /> */}
        <button onClick={handleClick}>Submit</button>
      </Form>
      {error && <div>Feedback Not processed! try Again!</div>}
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
  border: 4px solid blue;
`;

const Container = styled.div`
  height: 100vh;
  //display: flex;
  background-color: green;

  background-color: #22254b;
  //background-color: #efefee;
  //background: url(cinema);
`;

export default FeedBack;
