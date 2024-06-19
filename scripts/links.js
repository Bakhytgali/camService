    const link = document.querySelector("#o-nas-link");

    link.addEventListener("click", (event)=> {
        event.preventDefault();

        const url = link.getAttribute("data-url-change");
        history.pushState(null, "", url);

        const targetSection = document.getElementById(url);

        if(targetSection) {
            targetSection.scrollIntoView({behavior: "smooth"});
        }
    });