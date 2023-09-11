import Nav from "./components/Nav";
import Header from "./components/Header";
import Topics from "./components/Topics";
import Info from "./components/Info";
import Blog from "./components/Blog";

const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Header />
        <Topics />
        <Info />
        <Blog />
      </main>
    </>
  );
};

export default App;
