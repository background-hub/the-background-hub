import './App.css'
import About from './components/about';
import Home from './components/home';
import Navbar from "./components/Navbar";
import Servicos from './components/services';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <Home />
        <About /> 
        <Servicos />
      </ThemeProvider>
    </div>
  );
}

export default App;