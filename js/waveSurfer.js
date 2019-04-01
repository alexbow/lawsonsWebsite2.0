    var wavesurfer = WaveSurfer.create({
      // Use the id or class-name of the element you created, as a selector
      container: '#waveform',
      // The color can be either a simple CSS color or a Canvas gradient
      progressColor: '#00A91D',
      cursorColor: '#00A91D',
      waveColor: 'rgba(0, 169, 29, 0.6)',
      // This parameter makes the waveform look like SoundCloud's player
      barWidth: 3
    });

    wavesurfer.on('loading', function (percents) {
      document.getElementById('progress').value = percents;
    });

    wavesurfer.on('ready', function (percents) {
      document.getElementById('progress').style.display = 'none';
    });

    wavesurfer.load('./resources/Orchestration.MP3');


    var wavesurfer2 = WaveSurfer.create({
      // Use the id or class-name of the element you created, as a selector
      container: '#waveform2',
      // The color can be either a simple CSS color or a Canvas gradient
      progressColor: '#1341BD',
      cursorColor: '#1341BD',
      waveColor: 'rgba(0,0,255, 0.6)',
      // This parameter makes the waveform look like SoundCloud's player
      barWidth: 3
    });

    wavesurfer2.on('loading', function (percents) {
      document.getElementById('progress2').value = percents;
    });

    wavesurfer2.on('ready', function (percents) {
      document.getElementById('progress2').style.display = 'none';
    });

    wavesurfer2.load('./resources/Orchestration.MP3');

    var wavesurfer3 = WaveSurfer.create({
      // Use the id or class-name of the element you created, as a selector
      container: '#waveform3',
      // The color can be either a simple CSS color or a Canvas gradient
      progressColor: '#DD1000',
      cursorColor: '#DD1000',
      waveColor: 'rgba(221, 16, 0 ,0.6)',
      // This parameter makes the waveform look like SoundCloud's player
      barWidth: 3
    });

    wavesurfer3.on('loading', function (percents) {
      document.getElementById('progress3').value = percents;
    });

    wavesurfer3.on('ready', function (percents) {
      document.getElementById('progress3').style.display = 'none';
    });

    wavesurfer3.load('./resources/Orchestration.MP3');
