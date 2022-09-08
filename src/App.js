import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Title from "./components/title";
import Home from "./components/home";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import "./App.css";

function App() {
  const separate = false;

  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar separate={separate}>
          <Title />
          {separate ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="experience" element={<Experience />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          ) : (
            <>
              <Home />
              <a id="experience" />
              <Experience />
              <a id="projects" />
              <Projects />
              <a id="contact" />
              <Contact />
            </>
          )}
        </Sidebar>
      </div>
    </BrowserRouter>
  );
}

export default App;
