import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export default function Header(props) {
  // const makeKaiDisappear = () => console.log('👻');
  // document.addEventListener('click', makeKaiDisappear);

  return (
    <>
      <First>
        <h1>Nasa Pictures 👾👾👾</h1>
        <div>
          <h5>
            Are you ready? {""}
            <FontAwesomeIcon icon="coffee" />
          </h5>
          <h3>
            {" "}
            <FontAwesomeIcon icon="check-square" /> (Check The Picture Below!)
          </h3>
        </div>
      </First>
    </>
  );
}

const First = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
