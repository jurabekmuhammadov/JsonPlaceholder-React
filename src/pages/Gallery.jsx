import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../sass/pages/_gallery.scss";

const Gallery = () => {
  const { id } = useParams();
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const hasPrev = Boolean(page > 1);
  const hasNext = Boolean(page > Math.trunc(count / 8));

  const handlePage = (type) => {
    if (type === "prev") {
      setPage(page - 1);
    } else {
      setPage(page + 1);
    }
  };
  useEffect(() => {
    async function fetchUsers() {
      await axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?albumId=${id}&_page=${page}&_limit=8`
        )
        .then((response) => {
          setGallery(response.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    fetchUsers();
  }, [id, page]);
  useEffect(() => {
    async function getCount() {
      await axios
        .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
        .then((response) => {
          setCount(response.data.length);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    getCount();
  }, [id]);
  return (
    <section id="gallery">
      <header>
        <h1>Photos</h1>
      </header>
      <div className="container gallery__container">
        {gallery.map((photo, index) => (
          <div key={index} className="photos-card">
            <img src={photo.url} alt="photo" />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
      <div className="pagination container">
        <button
          className="prev"
          disabled={!hasPrev}
          onClick={() => handlePage("prev")}
        >
          Prev
        </button>
        <span>{page}</span>

        <button
          disabled={hasNext}
          className="next"
          onClick={() => handlePage("next")}
        >
          Next
        </button>
      </div>
      <footer>
        <p>Created by Jurabek</p>
      </footer>
    </section>
  );
};

export default Gallery;
