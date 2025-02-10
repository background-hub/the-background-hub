import './App.css'
import Home from './components/home';
import Navbar from "./components/Navbar";
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;