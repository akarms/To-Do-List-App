import React ,  { Fragment } from "react";

//component 

import InputTodo from "./components/inputTodo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
      <InputTodo />
      <ListTodo />
        </div>
    </Fragment>
  );
}

export default App;
