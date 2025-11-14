// import { templates } from '../settings.js';
// import utils from '../utils.js';
// import AudioPlayer from '../Components/AudioPlayer.js';

// class Audio {
//   constructor(data, wrapper) {
//     const thisAudio = this;

//     thisAudio.data = data;

//     thisAudio.wrapper = wrapper;

//     thisAudio.render(thisAudio.wrapper);

//     thisAudio.generatePlayer();
//   }

//   render(element) {
//     const thisAudio = this;

//     const generatedHTML = templates.audio(thisAudio.data);

//     // thisAudio.container = document.querySelector(wrapper);

//     thisAudio.element = utils.createDOMFromHTML(generatedHTML);

//     element.appendChild(thisAudio.element);
//   }

//   generatePlayer() {
//     const thisAudio = this;

//     thisAudio.greenAudioPlayer = new AudioPlayer(
//       thisAudio.wrapper,
//       thisAudio.data.id
//     );
//   }
// }

// export default Audio;
