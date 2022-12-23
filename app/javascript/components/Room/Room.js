import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Room = () => {
  const [room, setRoom] = useState({})
  const [videos, setVideos] = useState([])

  const { id } = useParams();

  useEffect(()=>{
    axios.get(`/api/v1/rooms/${id}`)
      .then(resp => {
        setRoom(resp.data)
        getVideos()
      })
      .catch(resp => console.log(resp))

  }, [])

  const getVideos = () => {
    const key = 'AIzaSyB_-mKJ7FMHVP962LNyHQ9jJeuanx5uGNo';
    const part = 'snippet';
    const type = 'video'
    const q = room.title;
    const url = `https://www.googleapis.com/youtube/v3/search?key=${key}&q=${q}&part=${part}&type=${type}`

    axios.get(url)
    .then(resp => setVideos(resp.data.items))
    .catch(resp => console.log(resp))
  }

  const handleVideos = videos.map(video => {

    console.log('---------------------youtubeapi')
    console.log(video.id.videoId)
    return (
      <li>
        <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} title="The Best of Metallica (part 1)🎸Лучшие песни группы Metallica -1 часть🎸The Greatest Hits of Metallica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </li>
    )
  })


  return(

    <div>
      <h1>{ room.title }</h1>
      <ul>{handleVideos}</ul>
      <iframe width="1280" height="661" src="https://www.youtube.com/embed/SqZNMvIEHhs?list=RDSqZNMvIEHhs" title="System Of A Down - Spiders (Official HD Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


      <Link to="/">Home</Link>
    </div>
  )
}

export default Room
