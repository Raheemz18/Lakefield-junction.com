export default function StoreCard({ store }: any) {
  return (
    <div
      className="store-card"
      style={{
        background: store.customTheme?.bg,
        color: store.customTheme?.textColor || "black",
      }}
    >
      <h2>{store.name}</h2>
      <p>{store.description}</p>

      {store.menu?.intro && (
        <p className="menu-preview">
          {store.menu.intro.slice(0, 80)}...
        </p>
      )}

      <div className="tag">{store.category}</div>

      {store.website && (
        <a href={store.website} target="_blank">
          Visit Store →
        </a>
      )}
    </div>
  );
}
