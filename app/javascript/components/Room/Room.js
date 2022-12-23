import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Room = () => {
  const [room, setRoom] = useState({})

  const { id } = useParams();

  useEffect(()=>{
    axios.get(`/api/v1/rooms/${id}`)
      .then(resp => setRoom(resp.data))
      .catch(resp => console.log(resp))
  }, [])

  return(

    <div>
      <h1>sem console na Salas: { room.title }</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Room
