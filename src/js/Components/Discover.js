import { templates } from '../settings.js';

class Discover {
  constructor(element, data) {
    const thisDiscover = this;

    thisDiscover.data = data;

    thisDiscover.render(element);
    thisDiscover.getSong();
  }

  render(element) {
    const thisDiscover = this;

    const generatedHTML = templates.discover();

    thisDiscover.dom = {};
    thisDiscover.dom.wrapper = element;
    // thisDiscover.element = utils.createDOMFromHTML(generatedHTML);
    thisDiscover.dom.wrapper.innerHTML = generatedHTML;
  }

  getSong() {
    // const thisDiscover = this;

    console.log(Math.floor(Math.random() * 10));
  }
}
export default Discover;
