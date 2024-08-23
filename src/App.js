import About from "./HomePage/About";
import Contact from "./HomePage/Contact";
import Hero from "./HomePage/Hero";
import Navbar from "./HomePage/Navbar";
import Project from "./HomePage/Project";


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <div className="h-[40rem]"></div>
      <Contact/>
    </div>
  );
}

export default App;
