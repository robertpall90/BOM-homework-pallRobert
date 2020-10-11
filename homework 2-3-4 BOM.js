// Homework 2:

// 1. Set a cookie on a document 
document.cookie = "user_name=pallRobert";
// 2. Read all cookies
let x = document.cookie;
console.log(x);

// 3. Add two radio buttons with two available languages (e.g., en-US, ro-RO)
// - The one whose value equals cookie’s value should be “pre-selected” 
// - When the user selects the other radio button, his option should be preserved in the cookie

document.cookie = "language=en-Us"

function changeLanguage2() {
    const chosenRadio = document.getElementsByName("checkable");
    if (chosenRadio[1].checked) {
        document.cookie = "language=ro-Ro";
    }
}
changeLanguage2();

// --------------------------------------------------------------------------------------------------------

// Homework 3:

// Use local storage
// Add two radio buttons with two available languages (e.g., en-US, ro-RO).
// Store the value of this preference in local storage
// The one whose value equals the stored value should be “pre-selected”
// When the user selects the other radio button, his option should be saved in the local storage

localStorage.setItem("language", "en-Us");

function changeLanguageLocalStorage() {
    const chosenRadio = document.getElementsByName("checkable");
    if (chosenRadio[1].checked) {
        localStorage.setItem("language", "ro-Ro")
    }
}
changeLanguageLocalStorage();

// --------------------------------------------------------------------------------------------------------


// Homework 4: 

// ●Use session storage
// ●Add two radio buttons with two available languages (e.g., en-US, ro-RO).
// ○Store the value of this preference in local storage
// ○The one whose value equals the stored value should be “pre-selected”
// ○When the user selects the other radio button, his option should be saved in the local storage

sessionStorage.setItem("language", "en-Us");

function changeLanguageSessionStorage() {
    const chosenRadio = document.getElementsByName("checkable");
    if (chosenRadio[1].checked) {
        sessionStorage.setItem("language", "ro-Ro")
    }
}
changeLanguageSessionStorage();