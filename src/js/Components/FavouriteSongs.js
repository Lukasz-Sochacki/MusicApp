class FavouriteSongs {
  constructor(songs) {
    const thisFavourite = this;
    thisFavourite.favouriteSongsList = [];
    thisFavourite.getFavouriteId(songs);
  }

  getFavouriteId(songs) {
    const thisFavourite = this;
    thisFavourite.songs = songs;
    thisFavourite.songs = document.querySelectorAll('[aria-label="Play"]');

    for (let playPause of thisFavourite.songs) {
      playPause.addEventListener('click', function (event) {
        const clickedElement = event.currentTarget;

        if (playPause.ariaLabel !== 'Play') {
          thisFavourite.favouriteSongsList.push(
            clickedElement.closest('.audio__wrapper').dataset.id
          );

          thisFavourite.favouriteSongsListInt =
            thisFavourite.favouriteSongsList.map(Number);
          thisFavourite.chooseFavouriteSong(
            thisFavourite.favouriteSongsListInt
          );
        }
      });
    }
  }

  chooseFavouriteSong(songs) {
    const thisFavourite = this;

    thisFavourite.counters = {};
    thisFavourite.mostOccuringNumber = songs[0];
    thisFavourite.biggestAmount = 0;

    for (let song of songs) {
      thisFavourite.counters[song] = (thisFavourite.counters[song] || 0) + 1;
      if (thisFavourite.counters[song] > thisFavourite.biggestAmount) {
        thisFavourite.biggestAmount = thisFavourite.counters[song];
        thisFavourite.mostOccuringNumber = song;
      }
    }
    return thisFavourite.mostOccuringNumber;
  }
}

export default FavouriteSongs;
