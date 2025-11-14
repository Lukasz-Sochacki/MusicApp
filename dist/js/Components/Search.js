import { templates, select } from '../settings.js';

class Search {
  constructor() {
    const thisSearch = this;

    thisSearch.render();
  }

  render() {
    const thisSearch = this;

    const generatedHTML = templates.search();

    thisSearch.dom = {};
    thisSearch.dom.wrapper = document.querySelector(select.containerOf.search);
    thisSearch.dom.wrapper.innerHTML = generatedHTML;
  }
}
export default Search;
