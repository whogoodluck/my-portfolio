import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useTheme } from "./providers/ThemeProvider";
import Header from "./components/Header";
import { Moon, Sun } from "lucide-react";

function App() {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <button
        onClick={handleToggleTheme}
        className="fixed bottom-8 right-8 cursor-pointer size-12 md:size-14 bg-accent border rounded-full flex items-center justify-center transition-all duration-300 active:rotate-90 active:scale-90 hover:-translate-y-1 hover:scale-110 hover:bg-primary/10 hover:text-primary hover:border-primary/50 hover:shadow-md"
      >
        {theme === "light" ? (
          <Sun className="size-6" />
        ) : (
          <Moon className="size-6" />
        )}
      </button>
    </Router>
  );
}

export default App;
