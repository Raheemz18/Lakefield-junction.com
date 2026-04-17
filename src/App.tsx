import { STORES } from "./data/stores";

export default function App() {
  return (
    <div className="container">
      <h1>Lakefield Junction</h1>
      <p>Your Lifestyle Hub</p>

      <div className="grid">
        {STORES.map((store) => (
          <div key={store.id} className="card">
            <h2>{store.name}</h2>
            <p>{store.description}</p>
            <span className="tag">{store.category}</span>

            {store.website && (
              <a href={store.website} target="_blank">
                Visit Website
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
