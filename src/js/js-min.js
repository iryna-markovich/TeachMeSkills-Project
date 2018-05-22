function openContainer() {
    let mobileContainer = document.getElementsByClassName('mobile__container');
    for (i = 0; i < mobileContainer.length; i++) {
        mobileContainer[i].style.display = 'flex';
    }
}

function openContainerSearch() {
    let mobileSearch = document.getElementsByClassName('mobile__search');
    for (i = 0; i < mobileSearch.length; i++) {
        mobileSearch[i].style.display = 'block';
    }
    let mobileMenu = document.getElementsByClassName('mobile__menu');
    for (i = 0; i < mobileMenu.length; i++) {
        mobileMenu[i].style.display = 'none';
    }
}

function openContainerMenu() {
    let mobileMenu = document.getElementsByClassName('mobile__menu');
    for (i = 0; i < mobileMenu.length; i++) {
        mobileMenu[i].style.display = 'block';
    }
    let mobileSearch = document.getElementsByClassName('mobile__search');
    for (i = 0; i < mobileSearch.length; i++) {
        mobileSearch[i].style.display = 'none';
    }
}

function closeContainer() {
    let mobileContainer = document.getElementsByClassName('mobile__container');
    for (i = 0; i < mobileContainer.length; i++) {
        mobileContainer[i].style.display = 'none';
    }
}

menuButton.addEventListener("click", openContainer);
menuButton.addEventListener("click", openContainerMenu); // open mobile menu

searchButton.addEventListener("click", openContainer);
searchButton.addEventListener("click", openContainerSearch); // open search menu
closeButton.addEventListener("click", closeContainer); //close all windows
