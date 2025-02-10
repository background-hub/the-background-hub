import './App.css'
import Navbar from "./components/Navbar";
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;