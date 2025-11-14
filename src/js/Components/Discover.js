import { templates, select } from '../settings.js';

class Discover {
  constructor() {
    const thisDiscover = this;

    thisDiscover.render();
  }

  render() {
    const thisDiscover = this;

    const generatedHTML = templates.discover();

    thisDiscover.dom = {};
    thisDiscover.dom.wrapper = document.querySelector(
      select.containerOf.discover
    );
    thisDiscover.dom.wrapper.innerHTML = generatedHTML;
  }
}
export default Discover;
