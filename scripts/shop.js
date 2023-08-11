/********* create variables *********/

var price1 = 29.70;
var price2 = 27.80;
var price3 = 32.50;

let pic1Button = document.getElementById("pic1");
let pic2Button = document.getElementById("pic2");
let pic3Button = document.getElementById("pic3");
let costSpan = document.getElementById("calculated-cost");


/********* colour change button of selected *********/


pic1Button.addEventListener("click",function(){

    if (!pic1Button.classList.contains("clicked")){
        pic1Button.classList.add("clicked");
    } 
    else {
        pic1Button.classList.remove("clicked");
    }
    calculateCost();
});

pic2Button.addEventListener("click",function(){
    
    if (!pic2Button.classList.contains("clicked")){
        pic2Button.classList.add("clicked");
    } 
    else {
        pic2Button.classList.remove("clicked");
    }
    calculateCost();
});

pic3Button.addEventListener("click",function(){
    
    if (!pic3Button.classList.contains("clicked")){
        pic3Button.classList.add("clicked");
    } 
    else {
        pic3Button.classList.remove("clicked");
    }
    calculateCost();
});


/********* clear items *********/
// when the clear-button is clicked, the "clicked" class is removed from all items, and the calculated cost is set to 0.

let clearButton = document.getElementById("clear-button");

function clearItems() {
    console.log("function clearitems is executing");
    pic1Button.classList.remove("clicked");
    pic2Button.classList.remove("clicked");
    pic3Button.classList.remove("clicked");
    costSpan.textContent = 0;
}

clearButton.addEventListener("click", clearItems);


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    var totalCost = 0;
    if (pic1Button.classList.contains("clicked")){
        totalCost += price1;
    }
    if(pic2Button.classList.contains("clicked")){
        totalCost += price2;
    }
    if(pic3Button.classList.contains("clicked")){
        totalCost += price3;
    }
    costSpan.textContent = totalCost;
}