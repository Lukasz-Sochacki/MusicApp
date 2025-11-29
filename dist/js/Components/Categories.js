import { templates, select, classNames } from '../settings.js';

class Categories {
  constructor(element, categories, data) {
    const thisCategories = this;

    thisCategories.data = data;
    thisCategories.render(element, categories);
    thisCategories.filterSongCategories();
  }

  render(element, categories) {
    const thisCategories = this;

    const generatedHTML = templates.categories(categories);
    thisCategories.dom = {};
    thisCategories.dom.wrapper = element;
    thisCategories.dom.wrapper.innerHTML = generatedHTML;
  }

  filterSongCategories() {
    const thisCategories = this;

    const songList = document.querySelectorAll(select.containerOf.songs);
    const categoryElements = document.querySelectorAll(
      select.categoriesSong.list
    );

    for (let categoryElement of categoryElements) {
      categoryElement.addEventListener('click', function (event) {
        const clickedElement = event.target;

        clickedElement.classList.toggle(classNames.categories.active);

        categoryElements.forEach(function (otherCategoryElement) {
          if (otherCategoryElement !== categoryElement) {
            otherCategoryElement.classList.remove(classNames.categories.active);
          }
        });

        songList.forEach(function (songElement) {
          const songId = parseInt(songElement.dataset.id);
          const song = thisCategories.data.find(function (elem) {
            return elem.id == songId;
          });

          if (!song.categories.includes(categoryElement.id)) {
            songElement.classList.add(classNames.hidden);
          } else {
            songElement.classList.remove(classNames.hidden);
          }

          if (!song) {
            alert('Piosenka o ID: ' + songId + 'nie istnieje w bazie danych');
            return;
          }

          if (
            !categoryElement.classList.contains(classNames.categories.active)
          ) {
            songElement.classList.remove(classNames.hidden);
          }
        });
      });
    }
  }
}

export default Categories;
