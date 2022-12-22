import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from './Room'

const Rooms = () => {
  const [rooms, setRooms] = useState([])

  useEffect(()=>{
    axios.get('api/v1/rooms.js')
      .then( resp => setRooms(resp.data))
      .catch( resp => console.log(resp))
  }, [rooms.lenght])

  const grid = rooms.map(item => {
    return <Room attributes={item}/>
  })

  return(
    <div className="home">
      <div className="header">
        <h1>Lista de Salas</h1>
        <div className="subheader">Escolha uma sala ou crie uma, para curtir videos</div>
      </div>
      <div className="grid">
        <ul>{grid}</ul>
      </div>
    </div>
  )
}

export default Rooms
