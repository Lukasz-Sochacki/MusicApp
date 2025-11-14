import { templates } from '../settings.js';
import utils from '../utils.js';

class AudioPlayer {
  constructor(data, element) {
    const thisAudio = this;

    thisAudio.data = data;

    thisAudio.render(element);
  }

  render(element) {
    const thisAudio = this;

    const generatedHTML = templates.audio(thisAudio.data);

    const audioContainer = document.querySelector(element);

    console.log(audioContainer);

    thisAudio.element = utils.createDOMFromHTML(generatedHTML);

    audioContainer.appendChild(thisAudio.element);
  }
}
export default AudioPlayer;
