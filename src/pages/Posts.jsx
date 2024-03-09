import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../sass/pages/_posts.scss";

const Posts = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      await axios
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => {
          setPosts(response.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    fetchUsers();
  }, [id]);
  return (
    <section id="posts">
      <header>
        <h1>Posts</h1>
      </header>
      <div className="container posts__container">
        {posts.map((post, index) => (
          <div key={index} className="posts-card">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <button>
              <Link to={`/comments/postsId/${post.id}`}>Comments</Link>
            </button>
          </div>
        ))}
      </div>
      <footer>
        <p>Created by Jurabek</p>
      </footer>
      s
    </section>
  );
};

export default Posts;
