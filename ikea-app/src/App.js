import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import ProductOverview from "./pages/ProductOverview";
import ProductDetail from "./pages/ProductDetail";
import MapPage from "./pages/MapPage";

function App() {
return (
<Router>
<Routes>
{/* Welcome / intro first */}
<Route path="/" element={<Introduction />} />

{/* Main app pages */}
<Route path="/home" element={<Home />} />
<Route path="/products" element={<ProductOverview />} />
<Route path="/product/:id" element={<ProductDetail />} />
<Route path="/map" element={<MapPage />} />

{/* Fallback: anything unknown -> intro */}
<Route path="*" element={<Navigate to="/" replace />} />
</Routes>
</Router>
);
}

export default App;


