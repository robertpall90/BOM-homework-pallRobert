/* Homework 1:

When clicking a button, change the URL and display something new on the (same!) page.
Make sure the user is not actually redirected to a new page. */


window.addEventListener('load', displayInitial);

function displayInitial() {
    const appDiv = document.getElementById('appDiv');

    button = document.createElement("button");
    button.innerText = "Change!"
    button.setAttribute("id", "buttonId");

    title = document.createElement("p");
    title.innerText = "Click above and change content."

    image = document.createElement("img");
    image.setAttribute("src", "https://images-na.ssl-images-amazon.com/images/I/811KEbZlORL.png")
    image.setAttribute("width", "300");

    appDiv.appendChild(button);
    appDiv.appendChild(title);
    appDiv.appendChild(image);

    button.addEventListener("click", displayChange);
}



function displayChange() {
    //location.hash = "iChangedTheURL";
    const appDiv = document.getElementById('appDiv');
    appDiv.innerHTML = "";

    title = document.createElement("p");
    title.innerText = "This is the changed content. Click the button above to change URL."

    image = document.createElement("img");
    image.setAttribute("src", "https://www.wallpapers13.com/wp-content/uploads/2017/02/Desktop-HD-Wallpaper-Looney-Tunes-Tweety-and-Sylvester-Cat-Cartoons-1920x1200-915x515.jpg")
    image.setAttribute("width", "300");


    button = document.createElement("button");
    button.innerText = "Change URL!"
    button.setAttribute("id", "buttonId");

    appDiv.appendChild(button);
    appDiv.appendChild(title);
    appDiv.appendChild(image);
    button.addEventListener("click", changeUrl);
}

function changeUrl() {
    location.replace("https://en.wikipedia.org/wiki/Daffy_Duck");
}
