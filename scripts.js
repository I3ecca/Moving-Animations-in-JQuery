$(function () {
    // $(".blue-box").animate({
    //     "margin-left": "+=200px"
    // }, 1000, "linear");
    // $(".blue-box").animate({
    //     "margin-left": "-=200px"
    // }, 1000, "linear");
   
});

//animate takes the parameter of an object, which can be easily added with the curly braces. 

//The second parameter it can take is the miliseconds. 1000 refers to 1 second. 

//the last parameter it can take is the way it eases. By default it is "swing" but if you pick something like "linear". 

// "swing" - moves at the beginning/end, but faster in the middle. 

//"linear" - moves in a constant speed. 

//more easing functions are available with external plugins. 

//using += and -+ can de-couple it from you main CSS. 

$(function () {
    // $(".blue-box").animate({
    //     "margin-left": "200px", 
    //     "opacity":"0", 
    //     "height": "50px", 
    //     "margin-top":"25px"
    // }, 1000);

    // $("p").animate({
    //     "font-size":"20px",
    //     //Note how this does not work.  
    //     "color":"red"
    // }, 1000);
   
   
});

//Using the animate functionality of JQuery, you can add CSS properties and then JQuery will animate them . See above on to write this! You can play around with other attributes if you'd like. PLEASE NOTE you cannot animate colors through the animate function of Jquery. 

//You can also write the inside CSS as fontSize as opposed to "font-size", but I kinda prefer to write them as I know them in CSS with the quotes. 

$(function () {
   
   $(".red-box").fadeTo(1000, 0.2);
   $(".green-box").delay(1000).fadeTo(1000, 0.5).fadeOut(2000).fadeIn(3000);
   $(".blue-box").delay(2000).fadeTo(2000, 0.8).fadeOut(1000).delay(500).fadeIn(2000);
   
});

//One way to achive the effect that you want is to delay our animations!

//Chaining: Means is you called a function on your element and then right after this you call another. In this case, line 49 with the green box is a chianed function. 

//Chaining is helpful because it makes your code readable and more concise as long as you do not overdo the chaining. 
