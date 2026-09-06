import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>Risk of Rain 2 Assistant</h1>
          <p>Quick item reference</p>
        </div>

        <div className="survivor-selector">
          <label htmlFor="survivor">Survivor</label>
          
          <select id="survivor">
            <option>All Survivors</option>
            <option>Commando</option>
            <option>Huntress</option>
            <option>Bandit</option>
            <option>Loader</option>
            <option>Railgunner</option>
          </select>
        </div>
      </header>

      <main>
        <section className="filters">
          <button>All</button>
          <button>Common</button>
          <button>Uncommon</button>
          <button>Legendary</button>
          <button>Boss</button>
          <button>Lunar</button>
          <button>Void</button>
          <button>Equipment</button>
        </section>

        <section className="dlc-filters">
          <label>
            <input type="checkbox" defaultChecked />
            Base Game
          </label>

          <label>
            <input type="checkbox" defaultChecked />
            Survivors of the Void
          </label>

          <label>
            <input type="checkbox" defaultChecked />
            Seekers of the Storm
          </label>

          <label>
            <input type="checkbox" defaultChecked />
            Alloyed Collective
          </label>
        </section>

        <section className="item-grid">
          <div className="placeholder-item">Item</div>
          <div className="placeholder-item">Item</div>
          <div className="placeholder-item">Item</div>
          <div className="placeholder-item">Item</div>
          <div className="placeholder-item">Item</div>
          <div className="placeholder-item">Item</div>
        </section>
      </main>
    </div>
  );
}

export default App;