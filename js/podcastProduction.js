
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

function towson() {
    var theDive = WaveSurfer.create({
        // Use the id or class-name of the element you created, as a selector
        container: '#towson',
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

    theDive.load('./resources/audio/Towson University_s, _What_s Your Story,_ Podcast/WYS Podcast - Matthew Bainbridge_v2.mp3');
}
