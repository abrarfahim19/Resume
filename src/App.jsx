import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login/Login";
import MainHome from "./components/MainHome/MainHome";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";


function WebContent() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<MainHome/>}></Route>
        <Route path="/home" element={<MainHome/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>
        <Route path="/project" element={<Projects/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      
    </>
  );
}
export default WebContent;
