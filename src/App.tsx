import "./App.css";

import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./containers/Home/Home.tsx";
import AboutMe from "./containers/AboutMe/AboutMe.tsx";
import Contacts from "./containers/Contcts/Contacts.tsx";
import Add from "./containers/Add/Add.tsx";
import ToolBar from "./components/ToolBar/ToolBar.tsx";
import { IPostMutation } from "./types";
import FullPost from "./containers/FullPost/FullPost.tsx";
import EditPost from "./containers/EditPost/EditPost.tsx";

const App = () => {
  const navigate = useNavigate();
  const navigateFull = useNavigate();

  const getFullPost = (post: IPostMutation) => {
    navigateFull(`posts/${post.id}/full`);
  };
  const onEdit = (post: IPostMutation) => {
    navigate(`posts/${post.id}/edit`);
  };
  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className="container mt-4 main-container">
        <Routes>
          {" "}
          <Route
            path={"/posts"}
            element={
              <Home onEdit={(post) => onEdit(post)} onClick={getFullPost} />
            }
          />
          <Route
            path={"/"}
            element={
              <Home onEdit={(post) => onEdit(post)} onClick={getFullPost} />
            }
          />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/posts/add" element={<Add />} />
          <Route path="/posts/:id/full" element={<FullPost />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </main>
      <footer className="bg-light footer">
        <div className="container p-4 text-start fs-5 ps-5">
          © A.Melnikova, 2024
        </div>
      </footer>
    </>
  );
};

export default App;
