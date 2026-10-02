// Popup

var popupoverley = document.querySelector(".popup-overley");
var popupbox = document.querySelector(".popup-box");
var addpopupbtn = document.getElementById("add-popup-btn");

addpopupbtn.addEventListener("click", function () {
    popupoverley.style.display = "block";
    popupbox.style.display = "block";
});

// Cancel

var cancelBtn = document.getElementById("cancel-popup");

cancelBtn.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverley.style.display = "none";
    popupbox.style.display = "none";
});

// Add Book

var container = document.querySelector(".container");

var addbook = document.getElementById("add-book");

var booktitleinput = document.getElementById("book-title-input");

var bookauthorinput = document.getElementById("book-author-input");

var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function (event) {

    event.preventDefault();

    var div = document.createElement("div");

    div.setAttribute("class", "book-container");

    div.innerHTML = `
        <h1>${booktitleinput.value}</h1>
        <h4>${bookauthorinput.value}</h4>
        <p>${bookdescriptioninput.value}</p>
        <button onclick="deletebook(event)">Delete</button>
    `;

    container.append(div);

    popupoverley.style.display = "none";
    popupbox.style.display = "none";

    // Clear inputs
    // booktitleinput.value = "";
    // bookauthorinput.value = "";
    // bookdescriptioninput.value = "";
});

// Delete

function deletebook(event) {
    event.target.parentElement.remove();
}