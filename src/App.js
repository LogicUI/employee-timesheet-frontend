import React from "react";
import TimeSheet from "./TimeSheet";
import  { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
body{
  font-family: "Roboto", sans-serif;
}
`;

function App() {
  return (
    <React.Fragment>
      <Global/>
      <TimeSheet></TimeSheet>
    </React.Fragment>
  );
}

export default App;
