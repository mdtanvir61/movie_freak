import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import MovieList from './components/MovieList/MovieList'
import UpcomingMovies from './components/UpcomingMovies/UpcomingMovies'
import TopRatedMovies from './components/TopRatedMovies/TopRatedMovies'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes> 
        <Route path="/" element={<MovieList/>}></Route>
        <Route path="/upcoming" element={<UpcomingMovies/>}></Route>
        <Route path="/top-rated" element={<TopRatedMovies/>}></Route>
        </Routes>
      </BrowserRouter> 
      </div>
    </>
  )
}

export default App