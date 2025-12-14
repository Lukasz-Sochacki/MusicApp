import { templates, select, classNames } from '../settings.js';
import AudioPlayer from './AudioPlayer.js';
import FavouriteSongs from './FavouriteSongs.js';

class Discover extends FavouriteSongs {
  constructor(element, data) {
    super();

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
    thisDiscover.dom.wrapper.innerHTML = generatedHTML;
  }

  getSong() {
    const thisDiscover = this;
    thisDiscover.generateSongLink = document.querySelector(
      select.nav.chooseSong
    );

    thisDiscover.generateSongLink.addEventListener('mousedown', function () {
      thisDiscover.generateSongLink.classList.add(classNames.clicked);
    });

    thisDiscover.generateSongLink.addEventListener('mouseup', function () {
      thisDiscover.generateSongLink.classList.remove(classNames.clicked);
    });

    thisDiscover.generateSongLink.addEventListener('click', function () {
      thisDiscover.maxId = Math.max(
        ...Object.keys(window.favouriteFrequency).map(Number)
      );
      thisDiscover.index = Math.floor(Math.random() * thisDiscover.data.length);
      thisDiscover.clearPlaylist();
      thisDiscover.initPlaylist();
    });
  }

  initAudioPlayer() {
    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: '#discover ' + select.player,
      stopOthersOnPlay: true,
    });
  }

  initPlaylist() {
    const thisDiscover = this;
    thisDiscover.audioWrapper = select.containerOf.discover.generatedSong;

    if (thisDiscover.data[thisDiscover.maxId]) {
      new AudioPlayer(
        thisDiscover.audioWrapper,
        thisDiscover.data[thisDiscover.maxId - 1]
      );
    } else if (!thisDiscover.data[thisDiscover.maxId]) {
      new AudioPlayer(
        thisDiscover.audioWrapper,
        thisDiscover.data[thisDiscover.index]
      );
    }

    thisDiscover.initAudioPlayer();
  }

  clearPlaylist() {
    const thisDiscover = this;
    thisDiscover.audioWrapper = document.querySelector(
      select.containerOf.discover.generatedSong
    );

    thisDiscover.audioWrapper.innerHTML = '';
  }
}
export default Discover;
