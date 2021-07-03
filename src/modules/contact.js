import clearMain from "../modules/methods.js";

function renderContact() {
    clearMain("contact");

    const main = document.querySelector("main");

    const map = document.createElement("div");
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2930.2580685664843!2d-78.13434768440524!3d42.74059191897732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3c53d35e37229%3A0xabfe0edac2efc3da!2s20%20N%20Main%20St%2C%20Warsaw%2C%20NY%2014569%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1625300155702!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
    
    const contactInfo = document.createElement("div");
    contactInfo.className = "contact-info";
    const span = document.createElement("span");
    span.textContent = "20 N Main St \r\n"
    span.textContent += "Warsaw, NY 14569 \r\n"

    const para1 = document.createElement("p");
    para1.textContent = "Call us at: \r\n";
    para1.textContent += "+1-555-5337-522";

    const para2 = document.createElement("p");
    para2.textContent = "Visit us today! \r\n";
    para2.textContent += "Or better don't...";
    
    contactInfo.append(span, para1, para2);
    main.append(map, contactInfo);
}

export default renderContact