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
    search: '.search-wrapper',
    discover: '.discover-wrapper',
    audio: '.audio-wrapper',
  },
  nav: {
    links: '.navigation__menu li a',
  },
  player: '.ready-player-',
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
