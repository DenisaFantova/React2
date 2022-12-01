import { greet } from "./greet.js";
import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>${greet('World')}</h1>
  <div class="smiley-face "></div>
`;