import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbare';


import Home from './Pages/Home';
import Results from './Pages/Results';
import Speaking from './Pages/Speaking';
import Contact from './Pages/Contact';
import News from './Pages/News';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
