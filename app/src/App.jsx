import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Topics from "./components/Topics";
import Info from "./components/Info";
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
        <Topics />
        <Info />
        <Blog />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default App;
