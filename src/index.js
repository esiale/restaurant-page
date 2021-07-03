import "./styles/style.css";
import renderHome from "./modules/home.js";
import renderMenu from "./modules/menu.js";
import renderContact from "./modules/contact.js";

function createLayout() {
    const content = document.getElementById("content");

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    const main = document.createElement("main");

    const footer = document.createElement("footer");
    footer.textContent = "The Odin Project"

    const header = document.createElement("header");

    const headerLogo = document.createElement("div");
    headerLogo.classList.add("header-logo");
    headerLogo.textContent = "esiale Bistro";

    const headerHome = document.createElement("div");
    headerHome.textContent = "Home";
    headerHome.addEventListener("click", renderHome);

    const headerMenu = document.createElement("div");
    headerMenu.textContent = "Menu";
    headerMenu.addEventListener("click", renderMenu);

    const headerContact = document.createElement("div");
    headerContact.textContent = "Contact";
    headerContact.addEventListener("click", renderContact);

    header.append(headerLogo, headerHome, headerMenu, headerContact);
    wrapper.append(header, main, footer);
    content.append(wrapper);
}

createLayout();
renderHome();