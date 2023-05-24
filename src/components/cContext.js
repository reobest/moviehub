import React, { useState, useContext } from 'react'
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const img  = 'https://image.tmdb.org/t/p/w500'
    const [input,setInput] = useState('')
    const [name,setName] = useState('')
    const [movies,setMovies] = useState([])
    const [tvshows,settvshows] = useState([])
    const [trending,setTrending] = useState([])
    const [mode,setMode] = useState(true)
    const [page,setPage] = useState(1)
    const [Price1,setPrice1] = useState(false)
    const [Price2,setPrice2] = useState(false)
    const [Price3,setPrice3] = useState(false)
    const [newMovie,setNewMovie] = useState([])
    const [movieIntro,setMovieTrailer] = useState(false)
    const [mobileNav,setMobileNav] = useState(false)
    const numOfPages = 10
    const handlePage = (page) => {
      setPage(page)
      window.scroll(0,0)
  }
  const handleClose = () => {
    setMovieTrailer(false)
  }
  const handleMobileNav = () => {
    setMobileNav(!mobileNav)
  }
  return (
    <AppContext.Provider value={{numOfPages,input,setInput,movies,setMovies,img,settvshows,tvshows,page,setPage,handlePage,trending,setTrending,mode,setMode,Price1,setPrice1,Price2,setPrice2,Price3,setPrice3,movieIntro,setMovieTrailer,name,setName,newMovie,setNewMovie,handleClose,mobileNav,setMobileNav,handleMobileNav}}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }