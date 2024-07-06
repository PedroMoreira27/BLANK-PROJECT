import './style.css';

function Usuario() {
  const users = [
    {
      name: 'Nome',
      username: 'Usuário',
      age: 'Idade',
      email: 'E-mail',
      password: 'Senha',
    },
    {
      name: 'Nome2',
      username: 'Usuário2',
      age: 'Idade2',
      email: 'E-mail2',
      password: 'Senha2',
    },
  ];

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
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
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

export default Usuario;
