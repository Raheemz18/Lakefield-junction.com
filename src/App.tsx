import { STORES, CATEGORIES } from "./data/stores";
import StoreCard from "./components/StoreCard";

export default function App() {
  return (
    <div className="mall-app">
      {/* HERO SECTION */}
      <header className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Lakefield Junction</h1>
          <p>Your Luxury Lifestyle Destination</p>
        </div>
      </header>

      {/* CATEGORY NAV */}
      <div className="category-bar">
        {CATEGORIES.map((c) => (
          <button key={c.id} className="category-pill">
            {c.icon} {c.label}
          </button>
        ))}
      </div>

      {/* STORE GRID */}
      <div className="store-grid">
        {STORES.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
}
