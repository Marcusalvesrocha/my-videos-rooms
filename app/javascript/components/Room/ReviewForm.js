import React, {Fragment} from "react";

const ReviewForm = ({ handleChange, handleSubmit, room, review }) => {
  const ratingOptions = [5,4,3,2,1].map((score,index) => {
    return(
      <Fragment>
        <input type="radio" value={score} name="score" onChange={handleChange} id={`rating-${score}`}/>
        <label></label>
      </Fragment>
    )
  })
  return (<div>
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div>Faça seu comentário sobre a sala {room.name}</div>
        <input type="hidden" value={review.room_id = room.id} name="room_id" />
        <div className="field">
          <input onChange={handleChange} value={review.title} type="text" name="title" placeholder="Título" />
        </div>
        <div className="field">
          <input onChange={handleChange} value={review.description} type="text" name="description" placeholder="Comentário" />
        </div>
        <div className="field">
          <div className="rating-container">
            <div className="rating-container">Rate:</div>
            <p>5 até 1</p>
            {ratingOptions}
          </div>
        </div>
        <button type='submit'>Comentar</button>
      </form>
    </div>
  </div>)
}

export default ReviewForm
