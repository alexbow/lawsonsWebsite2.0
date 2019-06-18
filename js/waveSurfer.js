    var wavesurfer = WaveSurfer.create({
      // Use the id or class-name of the element you created, as a selector
      container: '#waveform',
      // The color can be either a simple CSS color or a Canvas gradient
      progressColor: '#FF3E43',
      cursorColor: '#FF3E43',
      waveColor: 'rgba(254, 0, 6, 0.6)',
      // This parameter makes the waveform look like SoundCloud's player
      barWidth: 3,
      hideScrollbar: true,
      fillParent: true
    });

    wavesurfer.on('loading', function (percents) {
      document.getElementById('progress').value = percents;
    });

    wavesurfer.on('ready', function (percents) {
      document.getElementById('progress').style.display = 'none';
    });

    wavesurfer.load('./resources/audio/Intro VO Words/PortfolioWord_Record1.wav');


    var wavesurfer2 = WaveSurfer.create({
      // Use the id or class-name of the element you created, as a selector
      container: '#waveform2',
      // The color can be either a simple CSS color or a Canvas gradient
      progressColor: '#3DDC98',
      cursorColor: '#3DDC98',
      waveColor: 'rgba(22, 186, 116, 0.6)',
      // This parameter makes the waveform look like SoundCloud's player
      barWidth: 3,
      hideScrollbar: true,
      fillParent: true
    });

    wavesurfer2.on('loading', function (percents) {
      document.getElementById('progress2').value = percents;
    });

    wavesurfer2.on('ready', function (percents) {
      document.getElementById('progress2').style.display = 'none';
    });

    wavesurfer2.load('./resources/audio/Intro VO Words/PortfolioWord_Listen2.wav');

    var wavesurfer3 = WaveSurfer.create({
      // Use the id or class-name of the element you created, as a selector
      container: '#waveform3',
      // The color can be either a simple CSS color or a Canvas gradient
      progressColor: '#CA4CD3',
      cursorColor: '#CA4CD3',
      waveColor: 'rgba(127, 26, 134, 0.6)',
      // This parameter makes the waveform look like SoundCloud's player
      barWidth: 3,
      hideScrollbar: true,
      fillParent: true
      });

    wavesurfer3.on('loading', function (percents) {
      document.getElementById('progress3').value = percents;
    });

    wavesurfer3.on('ready', function (percents) {
      document.getElementById('progress3').style.display = 'none';
    });

    wavesurfer3.load('./resources/audio/Intro VO Words/PortfolioWord_Facilitate1.wav');
