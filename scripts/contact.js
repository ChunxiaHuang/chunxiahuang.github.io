// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Your message has been received!" in size 28 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submitButton = document.getElementById("submit-button");

let contactPage = document.getElementById("contact-page");

submitButton.addEventListener("click",function(){
    var newContent = document.createElement("p");
    newContent.textContent = "Your message has been received!";
    newContent.style.fontSize = "28px";
    newContent.style.color = "#f0b537";
    newContent.style.height = "350px";
    contactPage.textContent = "";
    contactPage.appendChild(newContent);
});