function openDevicesBottomSheet() {
    document.querySelector(".header__navbar-devices-bottom-sheet-overlay").classList.add("show");
    document.querySelector(".header__navbar-devices-bottom-sheet-container").classList.add("show");
}

function closeDevicesBottomSheet() {
    document.querySelector(".header__navbar-devices-bottom-sheet-overlay").classList.remove("show");
    document.querySelector(".header__navbar-devices-bottom-sheet-container").classList.remove("show");
}

window.addEventListener('click', e => {
    if (e.target == document.querySelector(".header__navbar-devices-bottom-sheet-overlay")) {
        document.querySelector(".header__navbar-devices-bottom-sheet-overlay").classList.remove("show");
        document.querySelector(".header__navbar-devices-bottom-sheet-container").classList.remove("show");
    }
});

// Open Navbar Menu
function openNavbarMenu() {
    document.querySelector(".header__navbar-menu-overlay").classList.add("show");
    document.querySelector(".header__navbar-menu-container").classList.add("show");
}

window.addEventListener('click', e => {
    if (e.target == document.querySelector(".header__navbar-menu-overlay")) {
        document.querySelector(".header__navbar-menu-overlay").classList.remove("show");
        document.querySelector(".header__navbar-menu-container").classList.remove("show");
    }
});