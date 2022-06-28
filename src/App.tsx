import Header from "./components/Header";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
};

export default App;
