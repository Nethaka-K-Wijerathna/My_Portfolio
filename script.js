function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.style.maxHeight = menu.style.maxHeight ? null : menu.scrollHeight + "px";
}