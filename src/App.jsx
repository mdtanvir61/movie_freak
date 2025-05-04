import './App.css'
import Navbar from './components/Navbar/Navbar'
import MovieList from './components/MovieList/MovieList'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpcomingMovies from './components/UpcomingMovies/UpcomingMovies';
import TopRatedMovies from './components/TopRatedMovies/TopRatedMovies';

function App() {
  

  return (
    <>
      <div className="app">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes> 
        <Route path = "/" element={<MovieList/>}></Route>
        <Route path="/upcoming" element={<UpcomingMovies />} />
        <Route path="/top-rated" element={<TopRatedMovies />} />
        {/* <main>Main Content</main> */}
        </Routes>
      </BrowserRouter> 
      </div>
    </>
  )
}

export default App
