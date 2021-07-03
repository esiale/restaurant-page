import clearMain from "../modules/methods.js";
import cookImg from "../img/cook.jpg";

const cook = new Image();
cook.src = cookImg;


function renderHome() {
    clearMain("home");
    const main = document.querySelector("main");

    const cookImage = document.createElement("div");
    cookImage.append(cook);

    const textWrapper = document.createElement("div");
    textWrapper.className = "home-textwrapper";
    const textSpan = document.createElement("span");
    const textSpan2 = document.createElement("span");
    const para = document.createElement("p");

    textSpan.textContent = "Welcome to the worst restaurant you've ever been to";
    para.textContent = "This is John. John isn't a cook. John is a web developer. \
    In fact, that's not even John in the picture! \
    We don't have a cook and we order your meals from a nearby restaurant! \
    Ingenious, isn't it?";
    textSpan2.textContent = "Enjoy!";
    
    textWrapper.append(textSpan, para, textSpan2);
    main.append(cookImage, textWrapper);
}

export default renderHome