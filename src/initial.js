function createTextDiv(text){
    const textDiv = document.createElement("div");
    textDiv.textContent = text;
    return textDiv;
}

function createTopBar() {
    const topBar = document.createElement("div");
    const navBar = document.createElement("div");
    navBar.appendChild(createTextDiv("Home"));
    navBar.appendChild(createTextDiv("Menu"));
    navBar.appendChild(createTextDiv("Contact"));
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
    about.classList.add("about");
    const aboutDescOne = createTextDiv("The best pasta you'll ever taste.");
    const aboutDescTwo = createTextDiv("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper maximus ex.");
    aboutDescOne.classList.add("about-description");
    aboutDescTwo.classList.add("about-description");
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
    const content = document.getElementById("content");
    content.appendChild(createTopBar());
    content.appendChild(createMidPage());
    content.appendChild(createFooter());
}

export default loadInitialPage;