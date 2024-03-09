import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../sass/pages/_album.scss";

const Albums = () => {
  const { id } = useParams();
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      await axios
        .get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        .then((response) => {
          setAlbums(response.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    fetchUsers();
  }, [id]);
  return (
    <section id="albums">
      <header>
        <h1>Albums</h1>
      </header>
      <div className="container albums__container">
        {albums.map((album, index) => (
          <div key={index} className="album-card">
            <p>{album.title}</p>
            <button>
              <Link to={`/gallery/albumId/${album.id}`}>Gallery</Link>
            </button>
          </div>
        ))}
      </div>
      <footer>
        <p>Created by Jurabek</p>
      </footer>
    </section>
  );
};

export default Albums;
