export const select = {
  templateOf: {
    home: '#template-home',
    search: '#template-search',
    discover: '#template-discover',
    audio: '#template-audio',
  },
  containerOf: {
    pages: '#pages',
    home: '.home-wrapper',
    search: {
      wrapper: '.search-wrapper',
      filteredSong: '.search__filteredSong',
      form: '.search__wrapper-form',
      input: '.search__input',
      results_title: '.search__results__title span',
    },
    discover: {
      wrapper: '.discover-wrapper',
      generatedSong: '.discover__generatedSong',
    },

    audio: '.audio-wrapper',
  },
  nav: {
    links: '.navigation__menu li a',
    chooseSong: '.discover__wrapper-subtitle',
  },
  player: '.ready-player-',

  upperCase: '.uppercase',
  capitalize: '.capitalize',
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
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
};
