import "./style.css";

function Mangas() {
  const movies = [
    {
      name: "Nome",
      genre: "Genero",
      year: "Ano",
      duration: "23:00",
      chapters: "23",
      description: "Descrição",
    },
    {
      name: "Nome2",
      genre: "Genero2",
      year: "Ano2",      
      duration: "23:00",
      chapters: "99",
      description: "Descrição2",
    },
  ];

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Mangas</h1>
        <input type="text" name="name" id="name" />
        <input type="text" name="genre" id="genre" />
        <input type="number" name="year" id="year" />
        <input type="number" name="chapters" id="chapters" />
        <input type="text" name="description" id="description" />
        <button type="button">Cadastrar</button>
      </form>
      <div>
        <h1>Lista de Mangas</h1>
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
                <td>{movie.chapters}</td>
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

export default Mangas;