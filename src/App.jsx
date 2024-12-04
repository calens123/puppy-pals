import "./App.css";
import { puppyList } from "./data.js";
import { useState } from "react";
import "./index.css";

function App() {
  // Initialize state with puppyList
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      {/* Header */}
      <h1 className="app-title">Puppy Pals</h1>
      <p className="app-subtitle">
        Click on a puppy's name to see more details!
      </p>

      {/* Puppy List */}
      <div className="puppy-list">
        {puppies.map((puppy) => (
          <p
            key={puppy.id}
            className="puppy-name"
            onClick={() => setFeatPupId(puppy.id)}
          >
            {puppy.name}
          </p>
        ))}
      </div>

      {/* Featured Puppy Details */}
      {featPupId && featuredPup && (
        <div className="featured-puppy">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
