import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Saiborg from './components/Saiborg';
import About from './components/About';
import Notfound from './components/Notfound'; // Your custom 404 component


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/saiborg" element={<Saiborg />} />
          <Route path="/about" element={<About />} />
          {/* Catch-all route for unknown paths */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;