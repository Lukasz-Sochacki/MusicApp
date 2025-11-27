import { templates, select } from '../settings.js';
import AudioPlayer from './AudioPlayer.js';

class Search {
  constructor(element, data, categories) {
    const thisSearch = this;

    thisSearch.data = data;
    thisSearch.render(element, categories);
    thisSearch.filterSong();
  }

  render(element, categories) {
    const thisSearch = this;

    const generatedHTML = templates.search(categories);

    thisSearch.dom = {};
    thisSearch.dom.wrapper = element;
    thisSearch.dom.wrapper.innerHTML = generatedHTML;
  }

  filterSong() {
    const thisSearch = this;

    thisSearch.searchForm = document.querySelector(
      select.containerOf.search.form
    );
    thisSearch.searchInput = document.querySelector(
      select.containerOf.search.input
    );
    thisSearch.categorySelect = document.querySelector(
      select.containerOf.search.category
    );

    thisSearch.searchForm.addEventListener('submit', function (event) {
      event.preventDefault();

      thisSearch.filteredSong = [];
      thisSearch.filteredSong = thisSearch.data.filter(function (song) {
        let arrayCategories = song.categories;
        let lowerArrayCategories = arrayCategories.map((elem) =>
          elem.toLowerCase()
        );

        for (let elem of lowerArrayCategories) {
          if (thisSearch.categorySelect.value == 'empty') {
            if (
              song.filename
                .replace(/_|mp3/g, ' ')
                .toLowerCase()
                .includes(thisSearch.searchInput.value.toLowerCase())
            ) {
              return thisSearch.filteredSong;
            }
          } else if (
            song.filename
              .replace(/_|mp3/g, ' ')
              .toLowerCase()
              .includes(thisSearch.searchInput.value.toLowerCase()) &&
            elem.includes(thisSearch.categorySelect.value.toLowerCase())
          ) {
            return thisSearch.filteredSong;
          }
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
      new AudioPlayer(thisSearch.audioWrapper, thisSearch.filteredSong[song]);
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
