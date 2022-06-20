import { html, render, useState } from 'https://unpkg.com/htm/preact/standalone.module.js';

function Rating() {
  const [state, setState] = useState(3);

  const incr = ev => {
    ev.preventDefault();
    setState(state + 1);
  };

  const decr = ev => {
    ev.preventDefault();
    setState(state - 1);
  };
  return html`
    <input type="text" name="rating" value=${state} size="1" />
    <button onClick=${incr} disabled=${state >= 5}>+</button>
    <button onClick=${decr} disabled=${state <= 1}>-</button>
  `;
}

export function renderRating() {
  render(html`
    <${Rating} />
  `, document.getElementById('rating'));
}
