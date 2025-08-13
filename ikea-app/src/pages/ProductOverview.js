import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import { fetchIKEAProducts } from "../api/ikeaApi";
import "./Products.css";

export default function ProductOverview() {
  const [all, setAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState("name-asc");
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetchIKEAProducts();
        setAll(data);
      } catch (e) {
        setError(String(e));
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(all.map((p) => p.category)))],
    [all]
  );

  const filtered = useMemo(() => {
    let out = all.filter((p) =>
      (p.name + " " + p.category).toLowerCase().includes(q.toLowerCase())
    );
    if (cat !== "All") out = out.filter((p) => p.category === cat);

    switch (sort) {
      case "price-asc":
        out.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        out.sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        out.sort((a, b) => b.rating - a.rating);
        break;
      default:
        out.sort((a, b) => a.name.localeCompare(b.name));
    }
    return out;
  }, [all, q, cat, sort]);

  return (
    <div className="products-page">
      <header className="products-header">
        <h1>Bedroom products</h1>
      </header>

      <div className="filters">
        <input
          className="search"
          placeholder="Search beds, mattresses, blinds…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <div className="row">
          <select value={cat} onChange={(e) => setCat(e.target.value)}>
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="name-asc">A–Z</option>
            <option value="rating-desc">Top rated</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
          </select>
        </div>
      </div>

      {loading && <p className="muted center">Loading products…</p>}
      {error && <p className="error center">{error}</p>}

      <div className="grid">
        {filtered.map((p) => (
          <Link to={`/product/${p.id}`} className="card" key={p.id}>
            <div className="thumb">
              <img src={p.image} alt={p.name} />
            </div>
            <div className="info">
              <h3>{p.name}</h3>
              <p className="sub">{p.category}</p>
              <div className="meta">
                <span>⭐ {p.rating.toFixed(1)}</span>
                <span>${p.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
