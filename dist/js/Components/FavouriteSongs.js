class FavouriteSongs {
  constructor() {
    const thisFavouriteSongs = this;
    thisFavouriteSongs.favouriteSongsList = [];
    thisFavouriteSongs.getFavouriteId();
  }

  getFavouriteId() {
    const thisFavouriteSongs = this;

    thisFavouriteSongs.playPauseBtnAttr = document.querySelectorAll(
      '[aria-label="Play"]'
    );

    for (let playPause of thisFavouriteSongs.playPauseBtnAttr) {
      playPause.addEventListener('click', function (event) {
        const clickedElement = event.currentTarget;

        if (playPause.ariaLabel !== 'Play') {
          thisFavouriteSongs.favouriteSongsList.push(
            clickedElement.closest('.audio__wrapper').dataset.id
          );
          thisFavouriteSongs.favouriteSongsListInt =
            thisFavouriteSongs.favouriteSongsList.map(Number);
        }
        console.log(thisFavouriteSongs.favouriteSongsListInt);
      });
    }
  }
}

export default FavouriteSongs;
