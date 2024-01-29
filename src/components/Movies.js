import React, { useEffect } from 'react'
import axios from 'axios'
import '../styles/movies.css'
import '../styles/pagination.css'
import {HiPlay} from 'react-icons/hi'
import { useGlobalContext } from './Context'
import MovieTrailer from './MovieTrailer'
import Pagination from '@mui/material/Pagination'
import { AiOutlineClose } from 'react-icons/ai'
const Movies = () => {
    const context = useGlobalContext()
    const {movies,setMovies,input,img,page,handlePage,mode,numOfPages,movieIntro,setMovieTrailer,setName,setNewMovie,handleClose} = context
    const inputValue = input
    let links = inputValue  ? '/search/movie' : '/discover/movie'
    const requestAPI = async () => {
        const API =`https://api.themoviedb.org/3${links}`
            const res = await axios.get(API, {
                params: {
                  api_key:'950c0b01e4f20051d2665dc32fcb89cf',
                  query:inputValue,
                  page:page,
                }
            })
            const newData = res.data.results
            console.log(newData)
            setMovies(newData)
    }
    
    useEffect(() => {
        requestAPI()
    })
    const movieList =  movies.map((movie) => {
        const {id,poster_path,vote_average,title} = movie
        return <div className='movie' key={id}>
            <div className='img-container'>
            <div className='background'></div>
              <img  className='img'src={`${img}${poster_path}`} alt="poster-img"/>
            </div>
            <h1 className={mode ? 'colorwhite' : 'colorblack'}>{title}</h1>
            <HiPlay className='play' onClick={() => {
               setMovieTrailer(true)
               setName(title)
               setNewMovie(movie)
            } }/>
            <div className='vote_average'>{vote_average}</div>
        </div>
    }) 

    useEffect(() => {
      handleClose()
    },[])
  return (
    <>
    <div className={mode ? 'movies-wrapper' : 'movies-wrapper themewhite'}>
      {movieIntro && <AiOutlineClose className='svg' onClick={handleClose}/>}
       {movieIntro &&  <MovieTrailer/>}
       {movieList}
    </div>
    <Pagination hideNextButton hidePrevButton count={numOfPages} variant="outlined"  size='large' className={mode ? 'pagination' : 'paginationligth'} onChange={(e) =>  handlePage(e.target.textContent)}/>
    </>
    
  )
}

export default Movies