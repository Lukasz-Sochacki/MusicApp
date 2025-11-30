import { templates, select, classNames } from '../settings.js';
import AudioPlayer from './AudioPlayer.js';
import FavouriteSongs from './FavouriteSongs.js';

class Discover extends FavouriteSongs {
  constructor(element, data, categories) {
    super();

    const thisDiscover = this;

    thisDiscover.data = data;

    thisDiscover.render(element, categories);
    thisDiscover.getSong();
  }

  render(element, categories) {
    const thisDiscover = this;

    const generatedHTML = templates.discover(categories);

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
      // const index = Math.floor(Math.random() * thisDiscover.data.length);

      thisDiscover.generatedSong =
        thisDiscover.data[thisDiscover.mostOccuringNumber - 1];
      console.log(thisDiscover.generatedSong);

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

    new AudioPlayer(thisDiscover.audioWrapper, thisDiscover.generatedSong);

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
