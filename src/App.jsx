import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { AppRouter } from "./routes/AppRouter";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <>
      <header
        className={` ${location.pathname === "/" ? "bg-background " : ""} `}
      >
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
