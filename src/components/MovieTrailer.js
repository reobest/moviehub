import React, {useEffect, useState} from 'react'
import '../styles/movietrailer.css'
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import { useGlobalContext } from './Context'
const MovieTrailer = () => {
    const context = useGlobalContext()
    const {name,newMovie,img} = context
    const [video, setVideo] = useState("")
    const [videoURL, setVideoURL] = useState("")
    function handleSearch() {
        setVideo(name)
        movieTrailer(video).then((res) => {
          setVideoURL(res);
        });
    }
    useEffect(() => {
        handleSearch()
    },[videoURL])
  return (
  <div className='reo' > 
     <div className='movietrailer'>
        <div className='video-wrapper'>
            <h1>{newMovie.title || newMovie.name}</h1>
        <ReactPlayer className='react-player' url={videoURL} controls={true} width="100%" height={300}/>
       <div className='desc'>
          <p> <span className='uniq'>Desc:</span>{newMovie.overview}</p>
        </div>
       </div>
    </div>
     </div>
  )
}

export default MovieTrailer