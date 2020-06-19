// eslint-disable-next-line import/extensions

async function playAudio() {
  // eslint-disable-next-line no-undef


  const playButton = document.querySelectorAll('[data-playlist-item]');


  playButton.forEach((element) => {
    const sound = new Howl({
      src: ['/src/audio/hansatom_-_4real.mp3'],
    });
    element.addEventListener('click', () => {
      if (sound.playing()) {
        sound.pause();
      } else {
        sound.play();
      }
    });
  });
}

playAudio();
