    var wavesurfer = WaveSurfer.create({
      // Use the id or class-name of the element you created, as a selector
      container: '#waveform',
      // The color can be either a simple CSS color or a Canvas gradient
      progressColor: '#FF5C58',
      cursorColor: '#FF5C58',
      waveColor: 'rgba(236, 10, 4, 0.6)',
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
      progressColor: '#8BB8ED',
      cursorColor: '#8BB8ED',
      waveColor: 'rgba(24, 107, 206, 0.6)',
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
      progressColor: '#46B55F',
      cursorColor: '#46B55F',
      waveColor: 'rgba(41, 162, 68, 0.6)',
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
