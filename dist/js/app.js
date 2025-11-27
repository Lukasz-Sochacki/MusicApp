import { select, classNames, settings } from './settings.js';
import Home from './Components/Home.js';
import Search from './Components/Search.js';
import Discover from './Components/Discover.js';
import AudioPlayer from './Components/AudioPlayer.js';
import Categories from './Components/Categories.js';
import utils from './utils.js';

const app = {
  initHome: function () {
    const thisApp = this;

    thisApp.homeContainer = document.querySelector(select.containerOf.home);

    thisApp.home = new Home(thisApp.homeContainer);
  },

  initAudioPlayer: function () {
    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: select.player,
      stopOthersOnPlay: true,
    });
  },

  initPlaylist: function () {
    const thisApp = this;
    thisApp.audioWrapper = select.containerOf.audio;

    for (let song in thisApp.data) {
      new AudioPlayer(thisApp.audioWrapper, thisApp.data[song]);
    }
    thisApp.initAudioPlayer();
  },

  initSearch: function () {
    const thisApp = this;

    thisApp.searchContainer = document.querySelector(
      select.containerOf.search.wrapper
    );

    thisApp.search = new Search(thisApp.searchContainer, thisApp.data);
  },

  initDiscover: function () {
    const thisApp = this;

    thisApp.discoverContainer = document.querySelector(
      select.containerOf.discover.wrapper
    );

    thisApp.discover = new Discover(thisApp.discoverContainer, thisApp.data);
  },

  initCategories: function () {
    const thisApp = this;
    thisApp.categoriesContainer = document.querySelector(
      select.containerOf.categories
    );

    const categoriesTypes = new Set();

    for (let type of thisApp.data) {
      for (let category of type.categories) {
        categoriesTypes.add(category);
      }
    }
    const categories = [...categoriesTypes];
    thisApp.categoriesObject = { categories };

    thisApp.categories = new Categories(
      thisApp.categoriesContainer,
      thisApp.categoriesObject,
      thisApp.data
    );
    // console.log(categoriesTypes);

    // console.log(thisApp.categoriesObject);
  },
  initData: function () {
    const thisApp = this;
    thisApp.data = {};

    const url = settings.db.url + '/' + settings.db.songs;

    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        console.log('parsedResponse: ', parsedResponse);

        thisApp.data = parsedResponse;
        thisApp.initPlaylist();
        thisApp.initDiscover();
        thisApp.initSearch();
        thisApp.initCategories();
        thisApp.initUpperCase();
        thisApp.initCapitalize();
      });
  },

  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;

    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        /* get page id from href attribute */
        const id = clickedElement.getAttribute('href').replace('#', '');
        /* run thisApp.activatePage with that ID */
        thisApp.activatePage(id);
        /* change URL hash */
        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function (pageId) {
    const thisApp = this;
    /* add class "active" to matching pages, remove from non-matching */
    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
      //metoda toggle umożliwia podanie drugiego argumentu jako warunek
    }
    /* add class "active" to matching links, remove from non-matching */
    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initUpperCase: function () {
    const toUpperCaseElements = document.querySelectorAll(classNames.upperCase);

    for (let element of toUpperCaseElements) {
      let textElement = element.textContent;

      textElement = textElement.toUpperCase();

      element.textContent = textElement;
    }
  },

  initCapitalize: function () {
    const toCapitalizeElements = document.querySelectorAll(
      classNames.capitalize
    );

    for (let element of toCapitalizeElements) {
      let textElement = element.textContent;

      textElement = utils.capitalizeFirstLetter(textElement);

      element.textContent = textElement;
    }
  },

  init: function () {
    const thisApp = this;

    thisApp.initHome();
    thisApp.initData();
    thisApp.initPages();
  },
};

app.init();
