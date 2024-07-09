import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./style.css";

function Animes() {
  const [animes, setAnimes] = useState([]);
  const nameRef = useRef();
  const genreRef = useRef();
  const yearRef = useRef();
  const durationRef = useRef();
  const descriptionRef = useRef();
  const chaptersRef = useRef();

  async function getAnimes() {
    const animesFromApi = await axios.get('/animes');
    setAnimes(animesFromApi.data);
  }

  async function createAnime() {
    const anime = {
      name: nameRef.current.value,
      genre: genreRef.current.value,
      year: yearRef.current.value,
      duration: durationRef.current.value,
      description: descriptionRef.current.value,
      chapters: chaptersRef.current.value,
    };

    await axios.post('/animes', anime);
    getAnimes();
  }

  useEffect(() => {
    getAnimes();
  }, []);

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Animes</h1>
        <input type="text" name="name" id="name" ref={nameRef} />
        <input type="text" name="genre" id="genre" ref={genreRef} />
        <input type="number" name="year" id="year" ref={yearRef} />
        <input type="number" name="duration" id="duration" ref={durationRef} />
        <input type="text" name="chapters" id="chapters" ref={chaptersRef} />
        <input type="text" name="description" id="description" ref={descriptionRef} />
        <button type="button" onClick={createAnime}>Cadastrar</button>
      </form>
      <div>
        <h1>Lista de Animes</h1>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Genero</th>
              <th>Ano</th>
              <th>Duração</th>
              <th>Capítulos</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {animes.map((anime) => (
              <tr key={anime.id}>
                <td>{anime.name}</td>
                <td>{anime.genre}</td>
                <td>{anime.year}</td>
                <td>{anime.duration}</td>
                <td>{anime.chapters}</td>
                <td>{anime.description}</td>
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

export default Animes;
