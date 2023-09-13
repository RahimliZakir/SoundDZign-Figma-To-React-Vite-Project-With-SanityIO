import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import CourseDetails from "./components/CourseDetails";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Intro />
        <About />
        <CourseDetails />
        <Blog />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default App;
