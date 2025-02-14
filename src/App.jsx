import './App.css'
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
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
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;