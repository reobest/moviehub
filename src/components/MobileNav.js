import React from 'react'
import'../styles/mobilenav.css'
import {BiCameraMovie,BiDollar} from 'react-icons/bi'
import {MdOutlineSlideshow} from 'react-icons/md'
import {HiTrendingUp} from 'react-icons/hi'
import { useGlobalContext } from './cContext'
import {Link} from 'react-router-dom'
const MobileNav = () => {
    const context = useGlobalContext()
    const {mobileNav,handleMobileNav} = context 
  return (
   <div className={mobileNav ? 'mobilenav' : 'none'}>
    <Link to='tvshows' onClick={handleMobileNav}><MdOutlineSlideshow/></Link> 
    <Link to='trending' onClick={handleMobileNav}><HiTrendingUp/></Link>
    <Link to='' onClick={handleMobileNav}><BiCameraMovie/></Link>
    <Link to='pricing' onClick={handleMobileNav}><BiDollar/></Link>
   </div>
  )
}

export default MobileNav