function TipCard({ title, description }) {
  return (
    <div style={{
      backgroundColor: "#1f2937",
      borderRadius: "12px",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    }}>
      <h3 style={{ fontSize: "1rem", fontWeight: "600", color: "#e5e7eb" }}>
        {title}
      </h3>
      <p style={{ fontSize: "0.875rem", color: "#cbd5e1" }}>
        {description}
      </p>
    </div>
  );
}

export default TipCard;
