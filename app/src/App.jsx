import Nav from "./components/Nav";
import Header from "./components/Header";
import Topics from "./components/Topics";

const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Header />
        <Topics />
      </main>
    </>
  );
};

export default App;
