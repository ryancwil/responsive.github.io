function opennav() {
    document.getElementById("sidemenu").style.display = "block";
    document.getElementById("sidemenu").style.position = "absolute";
    document.getElementById("sidemenu").style.zIndex = 1;
}

function closenav() {
    document.getElementById("sidemenu").style.display = "none";
}

var $window = $(window);

function checkWidth() {
    var windowsize = $window.width();
    if (windowsize > 768) {
        document.getElementById("sidemenu").style.display = "block";
    }
    else if (windowsize < 768) {
        document.getElementById("sidemenu").style.display = "none";
    }
}

checkWidth();

$(window).resize(checkWidth);