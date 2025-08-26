function toggleMenu() {
  const menu = document.getElementById('sideMenu');
  menu.style.right = (menu.style.right === '0px') ? '-250px' : '0px';
}
function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    if(sideMenu.style.right === "0px") {
        sideMenu.style.right = "-150px";
    } else {
        sideMenu.style.right = "0px";
    }
}