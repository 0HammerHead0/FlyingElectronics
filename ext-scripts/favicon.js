export function favicon(){
    const favicon = document.getElementById('favicon');
    console.log(favicon)
    const toggleFavicon = (event) => {
        if (event.matches) {
            favicon.href  = "./public/light-favicon.ico"
        }
        else {
            favicon.href = "./public/dark-favicon.ico"
        }
    };

    const darkFavicon = window.matchMedia("(prefers-color-scheme: dark)");
    darkFavicon.addEventListener("change",toggleFavicon);
    toggleFavicon(darkFavicon);
}

