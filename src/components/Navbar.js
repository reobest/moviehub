import React from 'react'
import '../styles/navbar.css'
import {BiCameraMovie,BiDollar} from 'react-icons/bi'
import {BsSearch,BsLightningCharge} from 'react-icons/bs'
import {MdOutlineSlideshow} from 'react-icons/md'
import {HiTrendingUp} from 'react-icons/hi'
import {RiMenu5Fill} from 'react-icons/ri'
import {MdDarkMode} from 'react-icons/md'
import { Button } from '@mui/material'
import { useGlobalContext } from './cContext'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const context = useGlobalContext()
    const {setInput,mode,setMode,handleMobileNav} = context
    const list = [<Link to='/'><BiCameraMovie/></Link>,<Link color='#fff' to='tvshows'><MdOutlineSlideshow/></Link>,<Link to='trending'><HiTrendingUp/></Link>,<Link to='pricing'><BiDollar/></Link>]
    const navigation = list.map((page,index) => {
        return <li key={index} className={`li li${index + 1} flex`} style={{
            listStyle:"none",
            fontSize:"1.8vw",
            margin:"0 1.8vw",
            color:"#fff"
    
    }}>{page}</li>
    })
  return (
    <nav  className={mode ? 'navbar flex' : 'navbar flex themegreen'}>
        <Link to='/'><h1 className={mode ? 'colorwhite' : 'colorblack'} style={{cursor:"pointer"}}>WatchHD</h1></Link>
        <div className='navigation flex'>
          {navigation}
        </div>
        <div className='search flex' style={{position:"relative"}}>
         <input type='text' className='b-r' placeholder='Search a Film' onChange={(e) => setInput(e.target.value)}/>
         <BsSearch className='search-icon flex' style={{position:"absolute",right:"5px",top:"50%",transform:"translateY(-50%)",cursor:"pointer",transition:"all .3s ease-in-out"}}/>
        </div>
        <Button className="b-r" style={{color:"#fff",cursor:"pointer",background:"#fff"}} onClick={() => setMode(!mode)}>{ mode ? <BsLightningCharge style={{fontSize:"24px",color:"#000"}} /> : <MdDarkMode style={{fontSize:"1.5vw",color:"#000"}}/> }</Button>
        <RiMenu5Fill className='mobile-menu' style={{color:"#fff",fontSize:"23px"}} onClick={handleMobileNav}/>
    </nav>
  )
}

export default Navbar