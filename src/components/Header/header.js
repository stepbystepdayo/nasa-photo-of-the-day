import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header(props) {
  // const makeKaiDisappear = () => console.log('👻');
  // document.addEventListener('click', makeKaiDisappear);

  const clickHandler = () => {
    console.log("👻");
  };
  return (
    <>
      <div className="App-header">
        <h1>Nasa Pictures 👾👾👾</h1>
        <div>
          <FontAwesomeIcon icon="check-square" /> Your{" "}
          <FontAwesomeIcon icon="coffee" /> is hot and ready!
        </div>
      </div>
    </>
  );
}
