import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Biography from "./Biography";

const Actors = () => {
  const [id, setId] = useState(1);
  const [biographies, setBiographies] = useState({});

  //const body = `https://api.themoviedb.org/3/person/${id}?api_key=93707bbd999b76530426a2e36710f747&language=en-US`;
  //const body = `https://api.themoviedb.org/3/person/${id}?api_key=93707bbd999b76530426a2e36710f747&language=en-US`;
  const addId = () => {
    setId(id + 1);
  };

  useEffect(() => {
    fetch(`http://localhost:8000/actors/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        //console.log(API_KEY);
        setBiographies(data.data);
      });
  }, [id]);

  const IMG_API = "https://image.tmdb.org/t/p/w1280/";
  return (
    <Main>
      <p>Here are all the biographies of Actors you can find</p>
      <Button onClick={addId}>next</Button>
      <Img src={IMG_API + biographies.profile_path} />
      <Biography
        name={biographies.name}
        biography={biographies.biography}
        popularity={biographies.popularity}
        known_for_department={biographies.known_for_department}
        also_known_as={biographies.also_known_as}
        birthday={biographies.birthday}
        place_of_birth={biographies.place_of_birth}
      />
    </Main>
  );
};
const Button = styled.button`
  font-size: 14px;
  font-family: inherit;
  font-weight: 800;
  border-radius: 30px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0, 0.08);
  border: 0;
  background-color: #ff5e57;
  cursor: pointer;
  color: #fff;
  display: flex;
  padding: 12px 0;
  margin-left: 150px;
`;
const Main = styled.div`
  background-color: #22254b;
`;
const Img = styled.img`
  max-width: 50%;
`;
export default Actors;
