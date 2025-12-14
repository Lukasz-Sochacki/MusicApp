class FavouriteSongs {
  constructor() {
    const thisFavourite = this;

    thisFavourite.getFavouriteId();
  }

  getFavouriteId() {
    const thisFavourite = this;

    thisFavourite.songs = document.querySelectorAll('[aria-label="Play"]');

    for (let playPause of thisFavourite.songs) {
      playPause.addEventListener('click', function (event) {
        const clickedElement = event.currentTarget;

        if (playPause.ariaLabel !== 'Play') {
          const id = clickedElement.closest('.audio__wrapper').dataset.id;

          if (window.favouriteFrequency[id]) {
            return (window.favouriteFrequency[id] += 1);
          } else {
            return (window.favouriteFrequency[id] = 1);
          }
        }
      });
    }
  }
}

export default FavouriteSongs;
