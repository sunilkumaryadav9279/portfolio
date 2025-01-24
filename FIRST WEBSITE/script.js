// Get the button
let mybutton = document.createElement("button");
mybutton.innerHTML = "↑ Scroll to top";
mybutton.style.position = "fixed";
mybutton.style.bottom = "20px";
mybutton.style.right = "20px";
mybutton.style.padding = "10px 20px";
mybutton.style.backgroundColor = "#333";
mybutton.style.color = "white";
mybutton.style.border = "none";
mybutton.style.borderRadius = "5px";
mybutton.style.cursor = "pointer";

// Append the button to the body
document.body.appendChild(mybutton);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
