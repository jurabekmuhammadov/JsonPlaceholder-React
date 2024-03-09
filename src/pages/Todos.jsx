import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import checked from "../assets/checked.png";
import unchecked from "../assets/notchecked.png";
import "../sass/pages/_todos.scss";

const Todos = () => {
  const { id } = useParams();
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      await axios
        .get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
        .then((response) => {
          setTodos(response.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    fetchUsers();
  }, [id]);
  return (
    <section id="todos">
      <header>
        <h1>Todos</h1>
      </header>
      <div className="container todos__container">
        {todos.map((todo, index) => (
          <div key={index} className="todo__card">
            <p>{todo.title}</p>
            <span>
              {todo.completed === true ? (
                <img width="30px" src={checked} alt="" />
              ) : (
                <img width="30px" src={unchecked} alt="" />
              )}
            </span>
          </div>
        ))}
      </div>
      <footer>
        <p>Created by Jurabek</p>
      </footer>
    </section>
  );
};

export default Todos;
