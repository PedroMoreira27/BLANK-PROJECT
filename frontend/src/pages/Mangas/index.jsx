import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './style.css';

function Mangas() {
  const [mangas, setMangas] = useState([]);
  const nameRef = useRef();
  const genreRef = useRef();
  const yearRef = useRef();
  const chaptersRef = useRef();
  const descriptionRef = useRef();

  async function getMangas() {
    const mangasFromApi = await axios.get('/mangas');
    setMangas(mangasFromApi.data);
  }

  async function createManga() {
    const manga = {
      name: nameRef.current.value,
      genre: genreRef.current.value,
      year: yearRef.current.value,
      chapters: chaptersRef.current.value,
      description: descriptionRef.current.value,
    };

    await axios.post('/mangas', manga);
    getMangas();
  }

  useEffect(() => {
    getMangas();
  }, []);

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Mangas</h1>
        <input type="text" name="name" id="name" ref={nameRef} />
        <input type="text" name="genre" id="genre" ref={genreRef} />
        <input type="number" name="year" id="year" ref={yearRef} />
        <input type="number" name="chapters" id="chapters" ref={chaptersRef} />
        <input
          type="text"
          name="description"
          id="description"
          ref={descriptionRef}
        />
        <button type="button" onClick={createManga}>
          Cadastrar
        </button>
      </form>
      <div>
        <h1>Lista de Mangas</h1>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Genero</th>
              <th>Ano</th>
              <th>Capítulos</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {mangas.map((manga) => (
              <tr key={manga.id}>
                <td>{manga.name}</td>
                <td>{manga.genre}</td>
                <td>{manga.year}</td>
                <td>{manga.chapters}</td>
                <td>{manga.description}</td>
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

export default Mangas;
