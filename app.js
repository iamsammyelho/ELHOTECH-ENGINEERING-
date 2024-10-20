function showmenu() {
    const toggleBar = document.querySelector('#menubar')
    toggleBar.classList.toggle(toggleBar.style.right = '0');
}
function hidemenu() {
    const toggleBar = document.querySelector('#menubar')
    toggleBar.classList.toggle(toggleBar.style.right = '-150px');
}