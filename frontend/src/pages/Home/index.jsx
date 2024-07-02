import './style.css';

function Home() {
  return (
    <div className="container">
      <form action="">
        <h1>Cadastro Usuario</h1>
        <input type="text" name="name" id="name" />
        <input type="text" name="username" id="username" />
        <input type="number" name="age" id="age" />
        <input type="email" name="email" id="email" />
        <input type="text" name="password" id="password" />
        <button type="button">Cadastrar</button>
      </form>
      <div>
        <h1>Lista de Usúários</h1>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Usuário</th>
              <th>Idade</th>
              <th>E-mail</th>
              <th>Senha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nome</td>
              <td>Usuário</td>
              <td>Idade</td>
              <td>E-mail</td>
              <td>Senha</td>
              <td>
                <span className="material-symbols-outlined">delete</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
