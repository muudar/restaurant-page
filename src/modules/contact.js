function loadContact(){
    document.getElementsByClassName("nav")[0].children[2].style.borderBottom = "2px solid white";
    document.getElementsByClassName("nav")[0].children[0].style.borderBottom = "none";
    document.getElementsByClassName("nav")[0].children[1].style.borderBottom = "none";
    const midPage = document.getElementsByClassName("mid-page")[0];
    midPage.classList.remove("mid-page-contact");
    midPage.innerHTML = "";
    const header = document.createElement("div");
    header.classList.add("mid-header");
    header.textContent = "Contact Us";
    midPage.appendChild(header);
    const phoneDiv = document.createElement("div");
    const phone = document.createElement("i");
    phone.classList.add("fa");
    phone.classList.add("fa-phone");
    const descDiv = document.createElement("div");
    descDiv.classList.add("mid-description");
    // phoneDiv.classList.add("mid-description");
    phone.textContent = "\u00A0 +012 345 6789";
    phoneDiv.appendChild(phone);
    descDiv.appendChild(phoneDiv);
    const mailDiv = document.createElement("div");
    const mail = document.createElement("i");
    mail.classList.add("fa");
    mail.classList.add("fa-envelope");
    // mailDiv.classList.add("mid-description");
    mail.textContent = "\u00A0 totallyRealEmail@notFake.com";
    mailDiv.appendChild(mail);
    descDiv.appendChild(mailDiv);
    const locationDiv = document.createElement("div");
    const location = document.createElement("i");
    location.classList.add("fa");
    location.classList.add("fa-map-marker");
    // locationDiv.classList.add("mid-description");
    location.textContent = "\u00A0 Real Location, Real Block, Totally Real City ";
    locationDiv.appendChild(location);
    descDiv.appendChild(locationDiv);
    midPage.appendChild(descDiv);
    const midDescDivs = document.getElementsByClassName("mid-description")[0].children;
    for(var i = 0; i < midDescDivs.length; i++){
        midDescDivs[i].style.textAlign = "left";
        midDescDivs[i].style.marginTop = "10px";
    }
}


export default loadContact;