import React from "react"
import Todo from "./components/Todo";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
