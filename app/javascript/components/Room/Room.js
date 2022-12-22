import React from "react";
import { Link, useParams } from "react-router-dom";

const Room = () => {
  const { id } = useParams();
  console.log(id)
  return(
    <div>
      <h1>Visualizando a Salas { id }</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Room
