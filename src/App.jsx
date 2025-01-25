import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Home from './pages/home/Home.jsx';
import HealthTips from './pages/healthTips/HealthTips.jsx';
import Purpose from './pages/purpose/Purpose.jsx';
import Products from './pages/products/Products.jsx';
import Events from './pages/events/Events.jsx';
import Team from './pages/team/Team.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Purpose" element={<Purpose />} />
        <Route path="/HealthTips" element={<HealthTips />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
