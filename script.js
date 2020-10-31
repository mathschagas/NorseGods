const botaoTopo = document.querySelector("#toTop");
const header = document.querySelector("header");

window.onscroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > header.clientHeight) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
}

const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
}

botaoTopo.addEventListener("click", scrollToTop());
