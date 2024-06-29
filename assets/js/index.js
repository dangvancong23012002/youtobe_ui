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

// Account Modal
function openAccountModal() {
    document.querySelector(".header__navbar-item-account-modal").classList.add("open");
}

function closeAccountModal() {
    document.querySelector(".header__navbar-item-account-modal").classList.remove("open");
}

// Setting Modal
function openSettingModal() {
    document.querySelector(".header__navbar-item-account-modal").classList.remove("open");
    document.querySelector(".setting__page").classList.add("open");
}

function closeSettingModal() {
    document.querySelector(".setting__page").classList.remove("open");
}

// Setting General Modal
function openSettingGeneralModal() {
    document.querySelector(".setting__body-item-general-modal").classList.add("open");
}

function backSettingModal() {
    document.querySelector(".setting__body-item-general-modal").classList.remove("open");
}

// Setting General Mode Modal
function openSettingGeneralModeModal() {
    document.querySelector(".setting__body-item-general-modal-item-mode-modal").classList.add("open");
}

function backSettingGeneralModal() {
    document.querySelector(".setting__body-item-general-modal-item-mode-modal").classList.remove("open");
}

// Mode
const themeBtn = document.querySelectorAll(".setting__body-item-general-modal-item-mode-modal-body-item");
for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].addEventListener('click', () => {
        if (i == 0) {
            changeDarkMode();
        } else if (i == 1) {
            changeLightMode();
        }
    });
}

// const themeLogo = document.querySelector(".header__logo-img");
const themeLogoLight = document.querySelector(".header__logo-img-light");
const themeLogoDark = document.querySelector(".header__logo-img-dark");

const lightTheme = "light-theme";
const logoTheme = "light-logo";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedLogo = localStorage.getItem("selected-logo");

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? "light" : "dark";
const getCurrentLogo = () => themeLogo.classList.contains(logoTheme) ? "dark" : "light";

if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](lightTheme);
    themeLogoDark.classList[selectedLogo === "light" ? "add" : "remove"]("hide-on-mobile");
    themeLogoLight.classList[selectedLogo === "dark" ? "remove" : "add"]("hide-on-mobile");
}

function changeDarkMode() {
    document.body.classList.remove("light-theme");
    themeLogoDark.classList.remove("hide-on-mobile");
    themeLogoLight.classList.add("hide-on-mobile");
    localStorage.setItem("selected-item", getCurrentTheme());
    localStorage.setItem("selected-logo", "dark");
}

function changeLightMode() {
    document.body.classList.add("light-theme");
    themeLogoDark.classList.add("hide-on-mobile");
    themeLogoLight.classList.remove("hide-on-mobile");
    localStorage.setItem("selected-item", getCurrentTheme());
    localStorage.setItem("selected-logo", "light");
}