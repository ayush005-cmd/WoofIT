const signInModal = document.getElementById("signInModal");
const searchModal = document.getElementById("searchModal");

const signInBtn = document.getElementById("signInBtn");
const searchIcon = document.getElementById("searchIcon");

const closeButtons = document.querySelectorAll(".close");

signInBtn.onclick = function(event) {
    event.preventDefault(); 
    signInModal.style.display = "block";
}

searchIcon.onclick = function(event) {
    event.preventDefault(); 
    searchModal.style.display = "block";
}

closeButtons.forEach(button => {
    button.onclick = function() {
        signInModal.style.display = "none";
        searchModal.style.display = "none";
    }
});

window.onclick = function(event) {
    if (event.target == signInModal) {
        signInModal.style.display = "none";
    }
    if (event.target == searchModal) {
        searchModal.style.display = "none";
    }
}