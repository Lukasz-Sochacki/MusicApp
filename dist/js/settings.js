export const select = {
  templateOf: {
    home: '#template-home',
    search: '#template-search',
    discover: '#template-discover',
    audio: '#template-audio',
    categories: '#template-categories',
  },
  containerOf: {
    pages: '#pages',
    home: '.home-wrapper',
    categories: '.categories-wrapper',
    search: {
      wrapper: '.search-wrapper',
      filteredSong: '.search__filteredSong',
      form: '.search__wrapper-form',
      input: '.search__input',
      results_title: '.search__results__title span',
      category: '#search__category',
    },
    discover: {
      wrapper: '.discover-wrapper',
      generatedSong: '.discover__generatedSong',
    },

    audio: '.audio-wrapper',
    songs: '.audio__wrapper',
  },

  nav: {
    links: '.navigation__menu li a',
    chooseSong: '.discover__wrapper-subtitle',
  },

  player: '.ready-player-',
  playerPlay: '.play-pause-btn',

  categoriesSong: {
    list: '.categories__list__li',
  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
  categories: {
    active: 'active',
  },
  upperCase: '.uppercase',
  capitalize: '.capitalize',
  clicked: 'clicked',
  hidden: 'hidden',
};

export const settings = {
  db: {
    url:
      '//' +
      window.location.hostname +
      (window.location.hostname == 'localhost' ? ':3131' : ''),

    songs: 'songs',
  },
};

export const templates = {
  home: Handlebars.compile(
    document.querySelector(select.templateOf.home).innerHTML
  ),
  search: Handlebars.compile(
    document.querySelector(select.templateOf.search).innerHTML
  ),
  discover: Handlebars.compile(
    document.querySelector(select.templateOf.discover).innerHTML
  ),
  audio: Handlebars.compile(
    document.querySelector(select.templateOf.audio).innerHTML
  ),
  categories: Handlebars.compile(
    document.querySelector(select.templateOf.categories).innerHTML
  ),
};
