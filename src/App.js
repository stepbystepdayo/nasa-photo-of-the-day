import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header/header";
import Image from "./components/Image/images";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
      <Header />
      <Image />
    </div>
  );
}

export default App;
