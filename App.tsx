import { STORES, CATEGORIES } from "./data/stores";
import StoreCard from "./components/StoreCard";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Lakefield Junction</h1>
        <p>Your Lifestyle Hub</p>
      </header>

      <div className="categories">
        {CATEGORIES.map((c) => (
          <button key={c.id} className="chip">
            {c.icon} {c.label}
          </button>
        ))}
      </div>

      <div className="store-grid">
        {STORES.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
}
