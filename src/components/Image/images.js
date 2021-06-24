import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "../../constants";
import axios from "axios";
import styled from "styled-components";

export default function Image(props) {
  const [nasa, setNasa] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(({ data }) => {
        setNasa(data);
        console.log(data);
      })
      .then(console.log(nasa))
      .catch((err) => console.log("Error No Nasa Data", err));
  }, []);

  return (
    <Header>
      <h2>{nasa.title}</h2>
      <h4>{nasa.date}</h4>
      <p>{nasa.explanation}</p>
      <ImageDiv alt="speace" src={nasa.hdurl}></ImageDiv>
    </Header>
  );
}

const Header = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const ImageDiv = styled.img`
  width: 60%;
  height: 30%;
`;
