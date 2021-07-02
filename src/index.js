import "./style.css";
import Background from "./bg.jpg";
import renderMenu from "./menu.js";

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

function renderHome() {
    clearMain("home");
    const main = document.querySelector("main");

    main.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum nesciunt, quibusdam, aliquid quod, at labore explicabo tempore quos perferendis minus officia nostrum perspiciatis architecto nobis maxime soluta harum vitae molestias magni id incidunt. Debitis placeat tempora veniam impedit dicta aut earum labore minus, deserunt velit at consectetur, accusamus, voluptatibus nobis neque eum quia expedita fuga deleniti architecto vero a voluptate. Illum eveniet repudiandae, rem officia veritatis quaerat error illo. Quod, reprehenderit sit earum porro nam vel aliquid numquam accusamus voluptates. Provident mollitia placeat asperiores a deleniti totam accusantium ratione quae, quibusdam veritatis obcaecati similique! Ducimus dolor nisi excepturi fugiat et!";
}

function clearMain(currentTab) {
    const main = document.querySelector("main");
    main.className = currentTab;

    while(main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

createLayout();
renderHome();

function renderContact() {
    alert("Render Menu");
}

export default clearMain