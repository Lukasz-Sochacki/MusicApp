import { templates, select } from '../settings.js';
import AudioPlayer from './AudioPlayer.js';

class Discover {
  constructor(element, data) {
    const thisDiscover = this;

    thisDiscover.data = data;
    // thisDiscover.generatedSong = null;
    // thisDiscover.AudioPlayer = null;

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

    const generateSongLink = document.querySelector(select.nav.chooseSong);

    generateSongLink.addEventListener('mousedown', function () {
      generateSongLink.classList.add('clicked');
    });

    generateSongLink.addEventListener('mouseup', function () {
      generateSongLink.classList.remove('clicked');
    });

    generateSongLink.addEventListener('click', function () {
      const index = Math.floor(Math.random() * thisDiscover.data.length);

      thisDiscover.generatedSong = thisDiscover.data[index];

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

    new AudioPlayer(thisDiscover.generatedSong, thisDiscover.audioWrapper);

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
