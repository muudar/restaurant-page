
function importAll(r) {
    return r.keys().map(r);
 }
 const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));

function Pasta(name, price){
    this.name = name;
    this.price = price;
}

function loadMenu(){
    document.getElementsByClassName("nav")[0].children[1].style.borderBottom = "2px solid white";
    document.getElementsByClassName("nav")[0].children[0].style.borderBottom = "none";
    document.getElementsByClassName("nav")[0].children[2].style.borderBottom = "none";
    var pastas = [];
    pastas.push(new Pasta("Spaghetti with Meatballs", 150));
    pastas.push(new Pasta("Classic Italian", 180));
    pastas.push(new Pasta("Pesto Pasta", 200));
    pastas.push(new Pasta("Mac n Cheese", 150));
    pastas.push(new Pasta("White Sauce Pasta", 140));
    pastas.push(new Pasta("Halloween Special", 250));
    for(var i = 0; i < 6; i++){
        pastas[i].image = images[i];
    }
    for(var i = 0; i < 6; i++){
        
    }
    const midPage = document.getElementsByClassName("mid-page")[0];
    midPage.classList.add("mid-page-menu");
    midPage.innerHTML = "";
    const menuDiv = document.createElement("div");
    menuDiv.textContent = "Menu";
    menuDiv.classList.add("mid-header");
    menuDiv.style.width = "100%";
    menuDiv.style.textAlign = "center";
    midPage.appendChild(menuDiv);
    for(var i = 0; i < pastas.length; i++){
        
        var imgDiv = document.createElement("div");
        imgDiv.classList.add("grow", "img-div");
        var myIcon = new Image();
        myIcon.src = pastas[i].image;
        myIcon.classList.add("menu-icon");
        imgDiv.appendChild(myIcon);
        var textDiv = document.createElement("div");
        textDiv.classList.add("img__description");
        const menuItemName = document.createElement("div");
        menuItemName.textContent = pastas[i].name;
        menuItemName.classList.add("menu-item-name");
        textDiv.appendChild(menuItemName);
        const menuItemPrice = document.createElement("div");
        menuItemPrice.textContent = pastas[i].price + " EGP";
        menuItemPrice.classList.add("menu-item-price");
        textDiv.appendChild(menuItemPrice);
        imgDiv.appendChild(textDiv);
        midPage.appendChild(imgDiv);
    }
}

export default loadMenu;