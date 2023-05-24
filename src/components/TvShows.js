import React,{useEffect} from 'react'
import { useGlobalContext } from './cContext'
import '../styles/movies.css'
import '../styles/pagination.css'
import axios from 'axios'
import MovieTrailer from './MovieTrailer'
import {HiPlay} from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import Pagination from '@mui/material/Pagination'
const TvShows = () => {
    const context = useGlobalContext()
    const {img,settvshows,tvshows,input,page,handlePage,mode,movieIntro,handleClose,setNewMovie,setName,setMovieTrailer} = context
    const tvInputValue = input
    let tvLinks = tvInputValue  ? '/search/tv' : '/discover/tv'
    const requestAPITvShows = async () => {
        const API =`https://api.themoviedb.org/3${tvLinks}`
            const res = await axios.get(API, {
                params: {
                  api_key:'950c0b01e4f20051d2665dc32fcb89cf',
                  query:tvInputValue,
                  page:page,
                }
            })
            const newData = res.data.results
            settvshows(newData)
    }
    const numOfPages = 10
    useEffect(() => {
        requestAPITvShows()
    },[input,page])
    const tvList = tvshows.map((tvshow) => {
        const {id,poster_path,vote_average,name} = tvshow
        return <div className='movie' key={id}>
            <div className='img-container'>
            <div className='background'></div>
              <img  className='img'src={`${img}${poster_path}`}/>
            </div>
            <h1 className={mode ? 'colorwhite' : 'colorblack'}>{name}</h1>
            <HiPlay className='play'  onClick={() => {
               setMovieTrailer(true)
               setName(name)
               setNewMovie(tvshow)
            } }/>
            <div className='vote_average'>{vote_average}</div>
        </div>
    })
  return (
     <>
    <div className={mode ? 'tv-wrapper' : 'tv-wrapper themewhite'}>
       {movieIntro && <AiOutlineClose className='svg' onClick={handleClose}/>}
       {movieIntro &&  <MovieTrailer/>}
       {tvList}
    </div>
     <Pagination hideNextButton hidePrevButton count={numOfPages} variant="outlined" color="primary"  size='large' className={mode ? 'pagination' : 'paginationligth'} onChange={(e) =>  handlePage(e.target.textContent)}/>
     </>
  )
}

export default TvShows
