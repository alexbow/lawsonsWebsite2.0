

    var wavesurfer = WaveSurfer.create({
      // Use the id or class-name of the element you created, as a selector
      container: '#waveform',
      // The color can be either a simple CSS color or a Canvas gradient
      progressColor: 'hsla(200, 100%, 30%, 0.5)',
      cursorColor: '#fff',
      // This parameter makes the waveform look like SoundCloud's player
      barWidth: 3
    });

    wavesurfer.on('loading', function (percents) {
      document.getElementById('progress').value = percents;
    });

    wavesurfer.on('ready', function (percents) {
      document.getElementById('progress').style.display = 'none';
    });

    wavesurfer.load('./resources/sample.wav');

    // https://ia800301.us.archive.org/15/items/fire_and_ice_librivox/fire_and_ice_frost_apc_64kb.mp3
