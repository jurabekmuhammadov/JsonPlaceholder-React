import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../sass/pages/_comments.scss";

const Comments = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      await axios
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response) => {
          setComments(response.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    fetchUsers();
  }, [id]);
  return (
    <section id="comments">
      <header>
        <h1>Comments</h1>
      </header>
      <div className="container comments__container">
        {comments.map((comment, index) => (
          <div key={index} className="comment-card">
            <h4>{comment.email}</h4>
            <h5>{comment.name}</h5>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
      <footer>
        <p>Created by Jurabek</p>
      </footer>
    </section>
  );
};

export default Comments;
