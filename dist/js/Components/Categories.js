import { templates } from '../settings.js';

class Categories {
  constructor(element, categories, data) {
    const thisCategories = this;

    thisCategories.data = data;
    thisCategories.render(element, categories);
  }

  render(element, categories) {
    const thisCategories = this;

    const generatedHTML = templates.categories(categories);
    thisCategories.dom = {};
    thisCategories.dom.wrapper = element;
    thisCategories.dom.wrapper.innerHTML = generatedHTML;
  }

  // showCategories() {
  //   const thisCategories = this;

  // }
}

export default Categories;
