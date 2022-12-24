import React from "react";

const RoomForm = ({ handleChange, handleSubmit, room }) => {

  return (
    <div>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <input onChange={handleChange} value={room.title} type="text" name="title" placeholder="Nome da Sala" />
          </div>
          <button type='submit'>Criar</button>
        </form>
      </div>
    </div>
  )
}

export default RoomForm
