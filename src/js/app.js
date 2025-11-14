import { select, classNames, settings } from './settings.js';
import Home from './Components/Home.js';
import Search from './Components/Search.js';
import Discover from './Components/Discover.js';
import AudioPlayer from './Components/AudioPlayer.js';

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
      new AudioPlayer(thisApp.data[song], thisApp.audioWrapper);
    }
    thisApp.initAudioPlayer();
  },

  initSearch: function () {
    const thisApp = this;

    thisApp.searchContainer = document.querySelector(select.containerOf.search);

    thisApp.search = new Search(thisApp.searchContainer);
  },

  initDiscover: function () {
    const thisApp = this;

    thisApp.discoverContainer = document.querySelector(
      select.containerOf.discover
    );

    thisApp.discover = new Discover(thisApp.discoverContainer);
  },

  initData: function () {
    const thisApp = this;
    thisApp.data = [];

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
        window.location.hash = '#' + id;
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

  init: function () {
    const thisApp = this;

    thisApp.initData();
    thisApp.initPages();
    thisApp.initHome();
  },
};

app.init();
