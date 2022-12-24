import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Room from './Room'
import RoomForm from './RoomForm'

const Rooms = () => {
  const [rooms, setRooms] = useState([])
  const [room, setRoom] = useState({title: '', user_id: '1'})
  const [newRoom, setNewRoom] = useState(false)

  useEffect(()=>{
    axios.get('api/v1/rooms.js')
      .then( resp => setRooms(resp.data))
      .catch( resp => console.log(resp))
  }, [rooms.lenght])

  const grid = rooms.map(item => {
    return <Room attributes={item}/>
  })

  const handleChange = (e) => {
    setRoom(Object.assign({}, room, {[e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    axios.post('/api/v1/rooms', {room})
      .then(resp => {
        setRoom(resp.data)
        setNewRoom(true)
      })
      .catch(error = {})
  }

  return(
    <div className="home">
      {newRoom ? (
        <div>
          <Navigate to={`/rooms/${room.id}`}/>
        </div>
        ) : (
        <div>
          <div className="header">
            <h1>Criar Sala</h1>
          </div>
          <div className="room-form">
            <RoomForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              room={room}
            />
          </div>
          <div className="header">
            <h1>Lista de Salas</h1>
            <div className="subheader">Escolha ou crie uma sala para curtir videos</div>
          </div>
          <div className="grid">
            {grid}
          </div>
        </div>
      )}
    </div>
  )
}

export default Rooms
