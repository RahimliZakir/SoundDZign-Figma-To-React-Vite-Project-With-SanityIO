import Nav from "./components/Nav";
import Header from "./components/Header";
import Topics from "./components/Topics";
import Info from "./components/Info";

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
      </main>
    </>
  );
};

export default App;
