import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from './Room'
import RoomForm from './RoomForm'

const Rooms = () => {
  const [rooms, setRooms] = useState([])
  const [room, setRoom] = useState({title: '', user_id: '1'})

  useEffect(()=>{
    axios.get('api/v1/rooms.js')
      .then( resp => setRooms(resp.data))
      .catch( resp => console.log(resp))
  }, [rooms.lenght])

  const grid = rooms.map(item => {
    return <Room attributes={item}/>
  })

  const handleChange = (e) => {
    console.log('name:', e.target.name, 'value:', e.target.value)
    setRoom(Object.assign({}, room, {[e.target.name]: e.target.value}))
    console.log('room:', room)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit', room)

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    axios.post('/api/v1/rooms', {room})
      .then(resp => {
        window.location.reload(false);
      })
      .catch(error = {})
  }

  return(
    <div className="home">
      <div className="new-room">Criar Sala</div>
      <div className="room-from">
        <RoomForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          room={room}
        />
      </div>
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
