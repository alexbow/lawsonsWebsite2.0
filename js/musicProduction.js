
    function collapsibles() {
        var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var musicDetails = this.nextElementSibling;
            if (musicDetails.style.maxHeight){
                musicDetails.style.maxHeight = null;
            } else {
                musicDetails.style.maxHeight = musicDetails.scrollHeight + "px";
            }
        });
        }
    }

    var previousTab;
    var allTabsClosed = true;

    function closeOtherTabs(id) {
      var activeTab = document.getElementsByClassName("collapsible active")[0];
      if(activeTab){
        activeTab.click()
        allTabsClosed = false;
      }
      if(previousTab == id && allTabsClosed != true){
        id.click();
        previousTab = null;
        allTabsClosed = true;
      }
      else{
        allTabsClosed = false;
      }
      previousTab = id;
    }

    function theDive() {
        var theDive = WaveSurfer.create({
            // Use the id or class-name of the element you created, as a selector
            container: '#theDive',
            // The color can be either a simple CSS color or a Canvas gradient
            progressColor: '#FF3E43',
            cursorColor: '#FF3E43',
            waveColor: 'rgba(254, 0, 6, 0.6)',
            // This parameter makes the waveform look like SoundCloud's player
            barWidth: 3,
            hideScrollbar: true,
            fillParent: true
        });

        theDive.on('loading', function (percents) {
            document.getElementById('progress').value = percents;
        });

        theDive.on('ready', function (percents) {
            document.getElementById('progress').style.display = 'none';
        });

        theDive.load('./resources/Orchestration.MP3');
    }

    function addictedToYou() {
      var addictedToYou = WaveSurfer.create({
          // Use the id or class-name of the element you created, as a selector
          container: '#addictedToYou',
          // The color can be either a simple CSS color or a Canvas gradient
          progressColor: '#FF3E43',
          cursorColor: '#FF3E43',
          waveColor: 'rgba(254, 0, 6, 0.6)',
          // This parameter makes the waveform look like SoundCloud's player
          barWidth: 3,
          hideScrollbar: true,
          fillParent: true
      });

      addictedToYou.on('loading', function (percents) {
          document.getElementById('progress').value = percents;
      });

      addictedToYou.on('ready', function (percents) {
          document.getElementById('progress').style.display = 'none';
      });

      addictedToYou.load('./resources/Orchestration.MP3');
    }

    function noose() {
      var noose = WaveSurfer.create({
          // Use the id or class-name of the element you created, as a selector
          container: '#noose',
          // The color can be either a simple CSS color or a Canvas gradient
          progressColor: '#FF3E43',
          cursorColor: '#FF3E43',
          waveColor: 'rgba(254, 0, 6, 0.6)',
          // This parameter makes the waveform look like SoundCloud's player
          barWidth: 3,
          hideScrollbar: true,
          fillParent: true
      });

      noose.on('loading', function (percents) {
          document.getElementById('progress').value = percents;
      });

      noose.on('ready', function (percents) {
          document.getElementById('progress').style.display = 'none';
      });

      noose.load('./resources/Orchestration.MP3');
    }

    function allison() {
      var allison = WaveSurfer.create({
          // Use the id or class-name of the element you created, as a selector
          container: '#allison',
          // The color can be either a simple CSS color or a Canvas gradient
          progressColor: '#FF3E43',
          cursorColor: '#FF3E43',
          waveColor: 'rgba(254, 0, 6, 0.6)',
          // This parameter makes the waveform look like SoundCloud's player
          barWidth: 3,
          hideScrollbar: true,
          fillParent: true
      });

      allison.on('loading', function (percents) {
          document.getElementById('progress').value = percents;
      });

      allison.on('ready', function (percents) {
          document.getElementById('progress').style.display = 'none';
      });

      allison.load('./resources/Orchestration.MP3');
    }

    function orange() {
      var orange = WaveSurfer.create({
          // Use the id or class-name of the element you created, as a selector
          container: '#orange',
          // The color can be either a simple CSS color or a Canvas gradient
          progressColor: '#FF3E43',
          cursorColor: '#FF3E43',
          waveColor: 'rgba(254, 0, 6, 0.6)',
          // This parameter makes the waveform look like SoundCloud's player
          barWidth: 3,
          hideScrollbar: true,
          fillParent: true
      });

      orange.on('loading', function (percents) {
          document.getElementById('progress').value = percents;
      });

      orange.on('ready', function (percents) {
          document.getElementById('progress').style.display = 'none';
      });

      orange.load('./resources/Orchestration.MP3');
    }

    function snowmen() {
      var snowmen = WaveSurfer.create({
          // Use the id or class-name of the element you created, as a selector
          container: '#snowmen',
          // The color can be either a simple CSS color or a Canvas gradient
          progressColor: '#FF3E43',
          cursorColor: '#FF3E43',
          waveColor: 'rgba(254, 0, 6, 0.6)',
          // This parameter makes the waveform look like SoundCloud's player
          barWidth: 3,
          hideScrollbar: true,
          fillParent: true
      });

      snowmen.on('loading', function (percents) {
          document.getElementById('progress').value = percents;
      });

      snowmen.on('ready', function (percents) {
          document.getElementById('progress').style.display = 'none';
      });

      snowmen.load('./resources/Orchestration.MP3');
    }

    function openingNight() {
      var openingNight = WaveSurfer.create({
          // Use the id or class-name of the element you created, as a selector
          container: '#openingNight',
          // The color can be either a simple CSS color or a Canvas gradient
          progressColor: '#FF3E43',
          cursorColor: '#FF3E43',
          waveColor: 'rgba(254, 0, 6, 0.6)',
          // This parameter makes the waveform look like SoundCloud's player
          barWidth: 3,
          hideScrollbar: true,
          fillParent: true
      });

      openingNight.on('loading', function (percents) {
          document.getElementById('progress').value = percents;
      });

      openingNight.on('ready', function (percents) {
          document.getElementById('progress').style.display = 'none';
      });

      openingNight.load('./resources/Orchestration.MP3');
    }

    function matador() {
      var matador = WaveSurfer.create({
          // Use the id or class-name of the element you created, as a selector
          container: '#matador',
          // The color can be either a simple CSS color or a Canvas gradient
          progressColor: '#FF3E43',
          cursorColor: '#FF3E43',
          waveColor: 'rgba(254, 0, 6, 0.6)',
          // This parameter makes the waveform look like SoundCloud's player
          barWidth: 3,
          hideScrollbar: true,
          fillParent: true
      });

      matador.on('loading', function (percents) {
          document.getElementById('progress').value = percents;
      });

      matador.on('ready', function (percents) {
          document.getElementById('progress').style.display = 'none';
      });

      matador.load('./resources/Orchestration.MP3');
    }

    function quixotic() {
      var quixotic = WaveSurfer.create({
          // Use the id or class-name of the element you created, as a selector
          container: '#quixotic',
          // The color can be either a simple CSS color or a Canvas gradient
          progressColor: '#FF3E43',
          cursorColor: '#FF3E43',
          waveColor: 'rgba(254, 0, 6, 0.6)',
          // This parameter makes the waveform look like SoundCloud's player
          barWidth: 3,
          hideScrollbar: true,
          fillParent: true
      });

      quixotic.on('loading', function (percents) {
          document.getElementById('progress').value = percents;
      });

      quixotic.on('ready', function (percents) {
          document.getElementById('progress').style.display = 'none';
      });

      quixotic.load('./resources/Orchestration.MP3');
    }
