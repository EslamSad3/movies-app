import { Container } from 'react-bootstrap';
import './App.css';
import Navbar from './componenets/Navbar';
import MoviesList from './componenets//MoviesList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieDetails from './componenets/MovieDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);
  const [pagenumbers, setpagenumbers] = useState([]);

  const getAllmovies = async () => {
    const data = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=e25abac2658f2f870049506eadebcce3&language=ar'
    );
    setMovies(data.data.results);
    setpagenumbers(data.data.total_pages);
  };

  const getPage = async (page) => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=e25abac2658f2f870049506eadebcce3&language=ar&page=${page}`
    );
    setMovies(data.data.results);
  };

  useEffect(() => {
    getAllmovies();
  }, []);

  const searchMovie = async (word) => {
    if (!word) {
      getAllmovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=e25abac2658f2f870049506eadebcce3&query=${word}&language=ar`
      );
      setMovies(res.data.results);
      setpagenumbers(res.data.total_pages);
      console.log(word);
    }
  };
  return (
    <div className="font color-body">
      <Navbar searchMovie={searchMovie} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getPage={getPage}
                  pagenumbers={pagenumbers}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
