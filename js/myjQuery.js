// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction();myFunction1();}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
/* When the user scrolls down from the top menu fixed at Top*/
 
function myFunction1() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("topmenu").className = "sticky";
    } else {
        document.getElementById("topmenu").className = "";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}