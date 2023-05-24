import React,{useEffect} from 'react'
import { useGlobalContext } from './cContext'
import {HiPlay} from 'react-icons/hi'
import '../styles/movies.css'
import '../styles/pagination.css'
import MovieTrailer from './MovieTrailer'
import axios from 'axios'
import { AiOutlineClose } from 'react-icons/ai'
import Pagination from '@mui/material/Pagination';
const Trending = () => {
    const context = useGlobalContext()
    const {numOfPages,trending,setTrending,input,img,page,handlePage,mode,movieIntro,handleClose,setMovieTrailer,setName,setNewMovie} = context
    const inputValue = input
    let trendingLinks = inputValue  ? '/search/movie' : '/trending/movie/week'
    const requestAPITrending = async () => {
        const API =`https://api.themoviedb.org/3${trendingLinks}`
            const res = await axios.get(API, {
                params: {
                  api_key:'950c0b01e4f20051d2665dc32fcb89cf',
                  query:inputValue,
                  page:page,
                }
            })
            const newData = res.data.results
            setTrending(newData)
    }
    
    useEffect(() => {
        requestAPITrending()
    },[input,page])
    const trendingList = trending.map((trend) => {
        const {id,poster_path,vote_average,title} = trend
        return <div className='movie' key={id}>
            <div className='img-container'>
            <div className='background'></div>
              <img  className='img'src={`${img}${poster_path}`}/>
            </div>
            <h1 className={mode ? 'colorwhite' : 'colorblack'}>{title}</h1>
            <HiPlay className='play' onClick={() => {
               setMovieTrailer(true)
               setName(title)
               setNewMovie(trend)
            } }/>
            <div className='vote_average'>{vote_average}</div>
        </div>
    })
  return (
    <>
    <div className={mode ? 'trending' : 'trending themewhite'}>
       {movieIntro && <AiOutlineClose className='svg' onClick={handleClose}/>}
       {movieIntro &&  <MovieTrailer/>}
       {trendingList}
    </div>
    <Pagination hideNextButton hidePrevButton count={numOfPages} variant="outlined"  size='large' className={mode ? 'pagination' : 'paginationligth'} onChange={(e) =>  handlePage(e.target.textContent)}/>
    </>
  )
}

export default Trending
