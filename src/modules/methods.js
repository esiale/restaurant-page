function clearMain(currentTab) {
    const main = document.querySelector("main");
    main.className = currentTab;

    while(main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

export default clearMain;