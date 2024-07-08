import './style.css';
import { useEffect, useState, useRef } from 'react';
import api from '../../services/api';

function Usuario() {
  const [users, setUsers] = useState([]);

  const nameRef = useRef();
  const usernameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  
  async function getUsers() {
    const usersFromApi = await api.get('/usuarios');
  
    setUsers(usersFromApi.data);
    console.log(users);
  }

  async function createUser() {
    const user = {
      name: nameRef.current.value,
      username: usernameRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
  
    await api.post('/usuarios', user);
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro Usuario</h1>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" ref={nameRef} />
        <label htmlFor="username">Usuário</label>
        <input type="text" name="username" id="username" ref={usernameRef} />
        <label htmlFor="age">Idade</label>
        <input type="number" name="age" id="age" ref={ageRef} />
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" ref={emailRef} />
        <label htmlFor="password">Senha</label>
        <input type="text" name="password" id="password" ref={passwordRef} />
        <button type="button" onClick={createUser}>Cadastrar</button>
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
