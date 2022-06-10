import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import MainHome from "./components/MainHome/MainHome";
import NavBar from "./components/NavBar/NavBar";
import Resume from "./components/Resume/Resume";


function WebContent() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<MainHome/>}></Route>
        <Route path="/home" element={<MainHome/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
      </Routes>
      
    </>
  );
}
export default WebContent;
