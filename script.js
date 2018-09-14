// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 200) {
        document.getElementById("myTitle").style.display = "inline";
    } else {
        document.getElementById("myTitle").style.display = "none";
    }
}
