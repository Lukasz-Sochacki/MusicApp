import { templates, select } from '../settings.js';

class Home {
  constructor() {
    const thisHome = this;

    thisHome.render();
  }

  render() {
    const thisHome = this;

    const generatedHTML = templates.home();

    thisHome.dom = {};

    thisHome.dom.wrapper = document.querySelector(select.containerOf.home);
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }
}
export default Home;
