import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import GtagListener from './GtagListener';

const App = () => {
  return (
    <div className="bg-[#000000e8] h-auto w-full overflow-hidden ">
      {/* Google Analytics SPA listener (sends page_view on route change) */}
      <GtagListener />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;