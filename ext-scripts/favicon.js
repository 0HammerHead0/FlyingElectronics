const lightFavicon = document.getElementById('favicon-light');
const darkFavicon = document.getElementById('favicon-dark');
console.log("Favicon script loaded",lightFavicon,darkFavicon);
const toggleFavicon = (event) => {
  if (event.matches) {
      darkFavicon.remove();
} else {
    lightFavicon.remove();
  }
};

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
prefersDark.addEventListener('change', toggleFavicon);
toggleFavicon(prefersDark);
