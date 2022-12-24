import React from "react";
import { Link } from "react-router-dom";

const Room = ({attributes}) => {
  return(
    <div className="card">
      <div className="room-title">{attributes.title}</div>
      <div className="room-score">Score: {attributes.avg_score}</div>
      <div className="room-link"><Link to={`/rooms/${attributes.id}`}> Entrar </Link></div>
    </div>
  )
}

<Link to="/">Home</Link>
export default Room
