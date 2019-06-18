
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
