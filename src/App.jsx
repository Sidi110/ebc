import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
        {/* Default route - redirects to home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        {/* Main routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />

        {/* Catch all route - redirects to home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
