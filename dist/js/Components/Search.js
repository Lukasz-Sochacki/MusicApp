import { templates, select } from '../settings.js';
import AudioPlayer from './AudioPlayer.js';

class Search {
  constructor(element, data) {
    const thisSearch = this;

    thisSearch.data = data;
    thisSearch.render(element);
    thisSearch.filterSong();
  }

  render(element) {
    const thisSearch = this;

    const generatedHTML = templates.search();

    thisSearch.dom = {};
    thisSearch.dom.wrapper = element;
    thisSearch.dom.wrapper.innerHTML = generatedHTML;
  }

  filterSong() {
    const thisSearch = this;

    const searchForm = document.querySelector(select.containerOf.search.form);
    const searchInput = document.querySelector(select.containerOf.search.input);

    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();

      thisSearch.filteredSong = [];
      thisSearch.filteredSong = thisSearch.data.filter(function (song) {
        if (
          song.filename
            .replace(/_|mp3/g, ' ')
            .toLowerCase()
            .includes(searchInput.value.toLowerCase())
        ) {
          return thisSearch.filteredSong;
        }
      });
      thisSearch.showResultsTitle();
      thisSearch.clearPlaylist();
      thisSearch.initPlaylist();
    });
  }

  showResultsTitle() {
    const thisSearch = this;
    const searchWrapper = document.querySelector(
      select.containerOf.search.results_title
    );
    if (thisSearch.filteredSong.length === 1) {
      searchWrapper.textContent =
        'We have found ' + thisSearch.filteredSong.length + ' song...';
    } else {
      searchWrapper.textContent =
        'We have found ' + thisSearch.filteredSong.length + ' songs...';
    }
  }

  initAudioPlayer() {
    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: '#search ' + select.player,
      stopOthersOnPlay: true,
    });
  }

  initPlaylist() {
    const thisSearch = this;
    thisSearch.audioWrapper = select.containerOf.search.filteredSong;
    for (let song in thisSearch.filteredSong) {
      new AudioPlayer(thisSearch.filteredSong[song], thisSearch.audioWrapper);
    }

    thisSearch.initAudioPlayer();
  }

  clearPlaylist() {
    const thisSearch = this;

    thisSearch.audioWrapper = document.querySelector(
      select.containerOf.search.filteredSong
    );

    thisSearch.audioWrapper.innerHTML = '';
  }
}
export default Search;
