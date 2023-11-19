import React, { useState } from "react";
import data from "./data";
function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = data.length;
    }

    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem impsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraph:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
