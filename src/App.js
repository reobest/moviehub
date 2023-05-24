import './App.css';
import './styles/pagination.css'
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import TvShows from './components/TvShows';
import Trending from './components/Trending';
import {Routes,Route} from 'react-router-dom';
import MobileNav from './components/MobileNav';
import Pricing from './Pricing';
function App() {
  return (
    <>
    <Navbar/>
    <MobileNav/>
    <Routes>
      <Route path='/' element={<Movies/>}/>
      <Route path='tvshows' element={<TvShows/>}/>
      <Route path='trending' element={<Trending/>}/>
      <Route path='pricing' element={<Pricing/>}/>
    </Routes>
    </>
  );
}

export default App;
