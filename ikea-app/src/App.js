import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Introduction from "./pages/Introduction";
import Home from "./pages/Home";
import ProductOverview from "./pages/ProductOverview";
import ProductDetail from "./pages/ProductDetail";
import MapPage from "./pages/MapPage";

function IntroGate({ children }) {
  const loc = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    const onboarded = localStorage.getItem("onboarded") === "1";

    // If not finished intro, force Intro no matter where they refresh/enter
    if (!onboarded && loc.pathname !== "/") {
      nav("/", { replace: true });
      return;
    }

    // If finished intro and they go to root, send them to Home
    if (onboarded && loc.pathname === "/") {
      nav("/home", { replace: true });
    }
  }, [loc.pathname, nav]);

  return children;
}

export default function App() {
  return (
    <Router>
      <IntroGate>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductOverview />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/map" element={<MapPage />} />
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </IntroGate>
    </Router>
  );
}



