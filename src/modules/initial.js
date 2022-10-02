import loadContact from "./contact";
import loadMenu from "./menu";

function createTextDiv(text){
    const textDiv = document.createElement("div");
    textDiv.textContent = text;
    return textDiv;
}

function createTopBar() {
    const topBar = document.createElement("div");
    const navBar = document.createElement("div");
    const home = createTextDiv("Home");
    home.onclick = loadInitialPage;
    navBar.appendChild(home);
    const menu = createTextDiv("Menu");
    menu.onclick = loadMenu;
    navBar.appendChild(menu);
    const contact = createTextDiv("Contact");
    contact.onclick = loadContact;
    navBar.appendChild(contact);
    for(var i = 0; i < navBar.children.length; i++){
        navBar.children[i].classList.add("grow");
    }
    topBar.appendChild(navBar);
    topBar.appendChild(createTextDiv("Bet El Pasta"));
    topBar.classList.add("top-bar", "bar");
    navBar.classList.add("nav");
    return topBar;
}


function createMidPage(){
    const midPage = document.createElement("div");
    midPage.classList.add("mid-page", "bar");
    const about = createTextDiv("About Us");
    about.classList.add("mid-header");
    const aboutDescOne = createTextDiv("The best pasta you'll ever taste.");
    const aboutDescTwo = createTextDiv("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper maximus ex.");
    aboutDescOne.classList.add("mid-description");
    aboutDescTwo.classList.add("mid-description");
    midPage.appendChild(about);
    midPage.appendChild(aboutDescOne);
    midPage.appendChild(aboutDescTwo);
    return midPage;
}

function createFooter(){
    const footer = document.createElement("footer");
    footer.id = "footer";
    footer.classList.add("bar");
    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fa");
    githubIcon.classList.add("fa-github");
    const link = document.createElement("a");
    link.href = "https://github.com/muudar";
    link.appendChild(githubIcon);
    const text = createTextDiv("Developed by muudar \u00A0");
    footer.appendChild(text);
    footer.appendChild(link);
    return footer;
}

function loadInitialPage(){
    console.log("xd");
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.appendChild(createTopBar());
    content.appendChild(createMidPage());
    content.appendChild(createFooter());
}

export default loadInitialPage;