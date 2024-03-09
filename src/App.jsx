import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";
import Comments from "./pages/Comments";
import Albums from "./pages/Albums";
import Gallery from "./pages/Gallery";
import "./sass/base/_background-animation.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="todos/:id" element={<Todos />} />
        <Route path="posts/:id" element={<Posts />} />
        <Route path="comments/postsId/:id" element={<Comments />} />
        <Route path="albums/:id" element={<Albums />} />
        <Route path="gallery/albumId/:id" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
