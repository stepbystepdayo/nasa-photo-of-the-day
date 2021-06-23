import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "../../constants";
import axios from "axios";

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
    <div>
      <div className="container">
        <h2>{nasa.title}</h2>
        <h4>{nasa.date}</h4>
        <p>{nasa.explanation}</p>
        <img alt="speace" src={nasa.hdurl}></img>
      </div>
    </div>
  );
}
