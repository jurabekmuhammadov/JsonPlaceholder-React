import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../sass/pages/_users.scss";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          setUsers(response.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    fetchUsers();
  }, []);
  return (
    <section id="users">
      <header>
        <h1>Users Information</h1>
      </header>
      <div className="container users__container">
        {users.map((user, index) => {
          return (
            <div key={index} className="card">
              <div className="names">
                <h3>{user.name}</h3>
                <h4>{user.username}</h4>
              </div>
              <p className="user-address">
                Address:{" "}
                <a href="address">
                  {user.address.city}, {user.address.street}
                </a>
              </p>
              <div className="user-email">
                <span>Email: </span>
                <a href="mailto: ${email}" className="card-text">
                  {user.email}
                </a>
              </div>
              <div className="user-phone">
                <span>Phone: </span>
                <a href="tel: ${phone}" className="card-text">
                  {user.phone}
                </a>
              </div>
              <div className="user-website">
                <span>Website: </span>
                <a href="${website}" className="card-text">
                  {user.website}
                </a>
              </div>
              <div className="bottom">
                <button>
                  <Link to={`/todos/${user.id}`}>Todos</Link>
                </button>
                <button>
                  <Link to={`/posts/${user.id}`}>Posts</Link>
                </button>
                <button>
                  <Link to={`/albums/${user.id}`}>Albums</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <footer>
        <p>Created by Jurabek</p>
      </footer>
    </section>
  );
};

export default Users;
