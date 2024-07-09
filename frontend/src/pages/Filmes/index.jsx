import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./style.css";

function Filmes() {
  const [movies, setMovies] = useState([]);
  const nameRef = useRef();
  const genreRef = useRef();
  const yearRef = useRef();
  const durationRef = useRef();
  const descriptionRef = useRef();

  async function getMovies() {
    const moviesFromApi = await axios.get('/filmes');
    setMovies(moviesFromApi.data);
  }

  async function createMovie() {
    const movie = {
      name: nameRef.current.value,
      genre: genreRef.current.value,
      year: yearRef.current.value,
      duration: durationRef.current.value,
      description: descriptionRef.current.value,
    };

    await axios.post('/filmes', movie);
    getMovies();
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Filmes</h1>
        <input type="text" name="name" id="name" ref={nameRef} />
        <input type="text" name="genre" id="genre" ref={genreRef} />
        <input type="number" name="year" id="year" ref={yearRef} />
        <input type="number" name="duration" id="duration" ref={durationRef} />
        <input type="text" name="description" id="description" ref={descriptionRef} />
        <button type="button" onClick={createMovie}>Cadastrar</button>
      </form>
      <div>
        <h1>Lista de Filmes</h1>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Genero</th>
              <th>Ano</th>
              <th>Duração</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.name}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
                <td>{movie.duration}</td>
                <td>{movie.description}</td>
                <td>
                  <span className="material-symbols-outlined">delete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Filmes;
