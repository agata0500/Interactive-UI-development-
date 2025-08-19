import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Introduction from "./pages/Introduction";
import Home from "./pages/Home";
import ProductOverview from "./pages/ProductOverview";
import ProductDetail from "./pages/ProductDetail";
import MapPage from "./pages/MapPage";

// Removed IntroGate logic so Introduction always shows at '/'

export default function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductOverview />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/map" element={<MapPage />} />
    
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      
    </Router>
  );
}



