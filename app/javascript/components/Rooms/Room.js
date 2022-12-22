import React from "react";
import { Link } from "react-router-dom";

const Room = ({attributes}) => {
  console.log(attributes)
  return(
    <div className="card">
      <div className="room-title">{attributes.title}</div>
      <div className="room-user">Usuário: {attributes.user_id}</div>
      <div className="room-score">Avaliação: {attributes.avg_score}</div>
      <div className="room-link"><Link to={`/rooms/${attributes.id}`}> Visualizar Sala </Link></div>
    </div>
  )
}

<Link to="/">Home</Link>
export default Room
