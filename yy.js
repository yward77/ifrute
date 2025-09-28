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
const video = document.getElementById('facy');
new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      video.play().catch(()=>{}); // يمنع ظهور الخطأ
    } else {
      video.pause();
    }
  });
},{threshold:0.5}).observe(video);