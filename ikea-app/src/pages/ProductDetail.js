import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import { fetchProductById } from "../api/products";
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
        const product = await fetchProductById(id);
        if (!product) throw new Error("Product not found");
        setP(product);
      } catch (e) {
        setError(String(e));
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <div className="page-pad"><p className="muted">Loading…</p></div>;
  if (error)   return <div className="page-pad"><p className="error">{error}</p></div>;

  return (
    <div className="product-detail">
      <header className="detail-header">
        <button className="back" onClick={() => nav(-1)}>← Back</button>
      </header>

      <div className="detail-hero">
        <img src={p.image} alt={p.name} />
      </div>

      <div className="detail-body">
        <h1>{p.name}</h1>
        <p className="muted">{p.category}</p>

        <div className="detail-meta">
          <span className="price">${p.price}</span>
          <span className="rating">⭐ {p.rating.toFixed(1)}</span>
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
