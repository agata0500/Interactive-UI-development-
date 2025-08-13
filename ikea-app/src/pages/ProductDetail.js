import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchIKEAProductById } from "../api/ikeaApi";
import "./Products.css";

export default function ProductDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const [p, setP] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const product = await fetchIKEAProductById(id);
        if (!product) throw new Error("Product not found");
        setP(product);
      } catch (e) {
        setError(String(e));
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <div className="page-pad"><LoadingSpinner text="Loading product..." /></div>;
  if (error)   return <div className="page-pad"><p className="error">{error}</p></div>;

  return (
    <div className="product-detail">
      <header className="detail-header">
        <button className="back" onClick={() => nav(-1)}>← Back</button>
      </header>

      <div className="detail-hero">
        <img 
          src={p.image} 
          alt={p.name} 
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMUUyOTNCIi8+CjxwYXRoIGQ9Ik0yMDAgMTUwQzE3NSAxNTAgMTUwIDE3NSAxNTAgMjAwQzE1MCAyMjUgMTc1IDI1MCAyMDAgMjUwQzIyNSAyNTAgMjUwIDIyNSAyNTAgMjAwQzI1MCAxNzUgMjI1IDE1MCAyMDAgMTUwWk0yMDAgMjMwQzE4NSAyMzAgMTcwIDIxNSAxNzAgMjAwQzE3MCAxODUgMTg1IDE3MCAyMDAgMTcwQzIxNSAxNzAgMjMwIDE4NSAyMzAgMjAwQzIzMCAyMTUgMjE1IDIzMCAyMDAgMjMwWiIgZmlsbD0iIzY2NzM4MCIvPgo8cGF0aCBkPSJNMzAwIDI1MEgyNTBWMjAwSDMwMFYyNTBaIiBmaWxsPSIjNjY3MzgwIi8+CjxwYXRoIGQ9Ik0xNTAgMjUwSDEwMFYyMDBIMTUwVjI1MFoiIGZpbGw9IiM2NjczODAiLz4KPC9zdmc+';
          }}
        />
      </div>

      <div className="detail-body">
        <h1>{p.name}</h1>
        <p className="muted">{p.category}</p>

                 <div className="detail-meta">
           <span className="price">${p.price}</span>
           <span className="rating">⭐ {p.rating.toFixed(1)}</span>
           {p.availability && (
             <span className={`availability ${p.availability.toLowerCase().includes('in stock') ? 'in-stock' : 'out-of-stock'}`}>
               📦 {p.availability}
             </span>
           )}
         </div>

        <p className="lead">{p.shortDesc}</p>

        <ul className="specs">
          {p.specs && Object.entries(p.specs).map(([k, v]) => (
            <li key={k}><strong>{k}:</strong> {v}</li>
          ))}
        </ul>

        <a
          className="cta"
          href={p.ikeaUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on IKEA →
        </a>
      </div>

      <BottomNav />
    </div>
  );
}
