
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
