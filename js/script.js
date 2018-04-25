$(document).ready(function () {

        $("#button2").click(function(){
        $("#popup").show();
});

        $("#close").click(function(){
        $("#popup").hide();
});

    $("#button3").click(function(){
        event.preventDefault();
        $("#popup2").toggle();
});

        $("#kitchen").click(function(){
        $("#popup3").show();
});

        $("#nobutton").click(function(){
        $("#popup3").hide();
});
        $("#kitchen").click(function(){
        $("#popup4").show();
});

        $("#nobutton").click(function(){
        $("#popup4").hide();
});
        $("#kitchen").click(function(){
        $("#popup5").show();
});

        $("#nobutton").click(function(){
        $("#popup5").hide();
});
});


function move() {
    var elem = document.getElementById("myBar"); 
    var width = 5;0
    var id = setInterval(frame, 250);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
