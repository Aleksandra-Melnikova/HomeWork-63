import "./App.css";

import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import AboutMe from './containers/AboutMe';
import Contacts from './containers/Contacts';
import Add from './containers/Add';
import ToolBar from './components/ToolBar/ToolBar.tsx';


const App = () => {
  return <>
    <header>
      <ToolBar/>
    </header>
    <main className="container mt-4 main-container">
      <Routes>
        {" "}
        <Route path="/" element={<Home/>}/>
        <Route path="/AboutMe" element={<AboutMe/>}/>
        <Route path="/Contacts" element={<Contacts/>}/>
        <Route path="/Add" element={<Add/>}>
        </Route>
        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
    </main>
    <footer className="bg-light footer">
      <div className="container p-4 text-start fs-5 ps-5">
        © A.Melnikova, 2024
      </div>
    </footer>
  </>;
};

export default App;
