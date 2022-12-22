import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rooms from "./components/Rooms/Rooms";
import Room from "./components/Room/Room";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Rooms/>}/>
      <Route path='/room/:id' element={<Room/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
