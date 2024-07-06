import "./style.css";

function Filmes() {
  const movies = [
    {
      name: "Nome",
      genre: "Genero",
      year: "Ano",
      duration: "Duração",
      description: "Descrição",
    },
    {
      name: "Nome2",
      genre: "Genero2",
      year: "Ano2",
      duration: "Duração2",
      description: "Descrição2",
    },
  ];

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Filmes</h1>
        <input type="text" name="name" id="name" />
        <input type="text" name="genre" id="genre" />
        <input type="number" name="year" id="year" />
        <input type="number" name="duration" id="duration" />
        <input type="text" name="description" id="description" />
        <button type="button">Cadastrar</button>
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