import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Prediction from './pages/Prediction';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ModelComparison from './pages/ModelComparison';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/model-comparison" element={<ModelComparison />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
