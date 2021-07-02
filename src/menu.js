import clearMain from ".";
import img0 from "./img/0.jpg";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";

const dish0 = new Image();
const dish1 = new Image();
const dish2 = new Image();
const dish3 = new Image();
const dish4 = new Image();
const dish5 = new Image();

dish0.src = img0;
dish1.src = img1;
dish2.src = img2;
dish3.src = img3;
dish4.src = img4;
dish5.src = img5;


const dishes = [
    {
        "image": dish0,
        "desc": "25$ - A cake. Enough said."
    },
    {
        "image": dish1,
        "desc": "299$ - Cottage cheese. Delicious."
    },
    {
        "image": dish2,
        "desc": "66$ - An egg."
    },
    {
        "image": dish3,
        "desc": "3$ - Some fries."
    },
    {
        "image": dish4,
        "desc": "10$ - Juice."
    },
    {
        "image": dish5,
        "desc": "2$ - An apple."
    }

]



function renderMenu() {
    clearMain("menu");

    for (let i = 0; i < dishes.length; i++ ) {
        renderDish(`${i}`, dishes[i].image, dishes[i].desc)
    }

};

const renderDish = function(id, image, desc) {
    const main = document.querySelector("main");
    const newDish = document.createElement("div");
    const dishDesc = document.createElement("p");
    dishDesc.textContent = desc;
    newDish.append(image, dishDesc);
    main.append(newDish);
}

export default renderMenu;