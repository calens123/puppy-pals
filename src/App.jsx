import "./App.css";
import { puppyList } from "./data.js";
import { useState } from "react";

function App() {
  // Initialize state with puppyList
  const [puppies, setPuppies] = useState(puppyList);

  console.log("puppyList: ", puppies); // Log the puppies array

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return <p key={puppy.id}>{puppy.name}</p>;
      })}
    </div>
  );
}

export default App;
