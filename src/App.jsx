import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { AppRouter } from "./routes/AppRouter";
function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <AppRouter />
      </main>
      <Footer />
    </>
  );
}

export default App;
