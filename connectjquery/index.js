$("h1").addClass("Heading-color");

$(".myButton").click(function () {
    $("h2").css("color","purple");  
});

$(document).keypress(function (event){
    $("h1").text(event.key);
}); 

$("h1").on("mouseover", function() {    
    $("p").css("color","pink");
    
})