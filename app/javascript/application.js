import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rooms from "./components/Rooms/Rooms";
import Room from "./components/Room/Room";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Rooms/>}/>
        <Route path='/rooms/:id' element={<Room/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
