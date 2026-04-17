export default function StoreCard({ store }: any) {
  return (
    <div
      className="lux-card"
      style={{
        background: `linear-gradient(135deg, ${store.customTheme?.bg || "#1a1a1a"}, #0a0a0a)`,
        color: store.customTheme?.textColor || "white",
      }}
    >
      <div className="lux-glow" />

      <h2>{store.name}</h2>
      <p>{store.description}</p>

      <div className="lux-tag">{store.category}</div>

      {store.website && (
        <a className="lux-btn" href={store.website} target="_blank">
          Explore Store →
        </a>
      )}
    </div>
  );
}
