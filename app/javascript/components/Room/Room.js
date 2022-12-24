import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const Room = () => {
  const [room, setRoom] = useState({})
  const [review, setReview] = useState({title: '', description: '', score: 0})
  const [videoId, setVideoId] = useState('SqZNMvIEHhs')
  const [loaded, setLoaded] = useState(false)

  const { id } = useParams();

  useEffect(()=>{
    axios.get(`/api/v1/rooms/${id}`)
      .then(resp => {
        setRoom(resp.data)
        setLoaded(true)
      })
      .catch(resp => console.log(resp))

  }, [videoId] == 'SqZNMvIEHhs')

  const Main = () => {
    return <iframe width="800px" height="500px" src={`https://www.youtube.com/embed/${videoId}?list=RDSqZNMvIEHhs`} title="System Of A Down - Spiders (Official HD Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  }

  const VideosOptions = () => {
    return(
      <div>
        {loaded && (
          <div>
            <img onClick={(_) => changeVideo('SqZNMvIEHhs')} src="https://i.ytimg.com/vi/SqZNMvIEHhs/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLD3VCj60EFIYbzM44BUlytZMH_jgQ"/>
            <img onClick={(_) => changeVideo('Bz2fYl7Vn4g')} src="https://i.ytimg.com/vi/Bz2fYl7Vn4g/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLD2RDmxHxAqsk3fDGYzwlE-JGznIw"/>
            <img onClick={(_) => changeVideo('I5EdxUG1K-c')} src="https://i.ytimg.com/vi/I5EdxUG1K-c/hqdefault.jpg?sqp=-oaymwE8CKgBEF5IWvKriqkDLwgBFQAAAAAYASUAAMhCPQCAokN4AfABAfgB1AaAAuADigIMCAAQARhlIFgoSTAP&rs=AOn4CLCR1VSDeF304u4vl5_-xY4T1NhLqQ"/>
            <img onClick={(_) => changeVideo('DLYphcpexSU')} src="https://i.ytimg.com/vi/DLYphcpexSU/hqdefault.jpg?sqp=-oaymwE8CKgBEF5IWvKriqkDLwgBFQAAAAAYASUAAMhCPQCAokN4AfABAfgB_gmAAtAFigIMCAAQARh_IBMoGjAP&rs=AOn4CLAYVARUKNxcRf3Tdm3ErEdN7B8fyg"/>
            <img onClick={(_) => changeVideo('tKrbNY51g-w')} src="https://i.ytimg.com/vi/tKrbNY51g-w/hqdefault.jpg?sqp=-oaymwE8CKgBEF5IWvKriqkDLwgBFQAAAAAYASUAAMhCPQCAokN4AfABAfgB1AaAAuADigIMCAAQARhlIGUoZTAP&rs=AOn4CLBV7YMTgtySmPR4etlPYbn6RHRs_A"/>
            <img onClick={(_) => changeVideo('HnC4-WtWivI')} src="https://i.ytimg.com/vi/HnC4-WtWivI/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDjrtSEW503FUL9kHehdFThKajm4g"/>
          </div>
        )}
      </div>
    )
  }

  const changeVideo = (idVideo) => {
    loaded && setVideoId(idVideo);
  };

  const handleChange = (e) => {
    console.log('name:', e.target.name, 'value:', e.target.value)
    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
    console.log('review:', review)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit', review)

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    axios.post('/api/v1/reviews', {review})
      .then(resp => {
        window.location.reload(false);
      })
      .catch(error = {})
  }

  return(
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>{ room.title }</h1>
      {loaded && (
        <div>
          <Main />
          <VideosOptions />

            <div className="reviews">
                <h2>Comentários - {`${room.avg_score}(${room.reviews.length})`} {}</h2>
                <h3>Rating: {`${room.avg_score}(${room.reviews.length})`} {}</h3>
                {room.reviews.map((review) => <Review key={review.id} review={review}/>)}
            </div>

          <ReviewForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            room={room}
            review={review}
          />
        </div>
      )}
    </div>
  )
}

export default Room
