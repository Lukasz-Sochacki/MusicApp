class FavouriteSongs {
  constructor(songs) {
    const thisFavourite = this;

    thisFavourite.getFavouriteId(songs);
  }

  getFavouriteId(songs) {
    const thisFavourite = this;

    thisFavourite.favouriteFrequency = {};

    thisFavourite.songs = songs;

    thisFavourite.songs = document.querySelectorAll('[aria-label="Play"]');

    for (let playPause of thisFavourite.songs) {
      playPause.addEventListener('click', function (event) {
        const clickedElement = event.currentTarget;

        if (playPause.ariaLabel !== 'Play') {
          const id = clickedElement.closest('.audio__wrapper').dataset.id;

          if (thisFavourite.favouriteFrequency[id]) {
            return (thisFavourite.favouriteFrequency[id] += 1);
          } else {
            return (thisFavourite.favouriteFrequency[id] = 1);
          }
        }
      });
    }
  }
}

export default FavouriteSongs;
