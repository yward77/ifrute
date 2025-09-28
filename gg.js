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
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("branchSearch");
  const noResults = document.getElementById("noResults");

  // جمع الكروت مع استبعاد العناصر اللي ممكن تكون صورة أو غير كارد
  const raw = Array.from(document.querySelectorAll(".branches .branch-card"));
  const cards = raw.filter(el => el.tagName === "DIV" && el.querySelector("h3"));

  // خزن العرض الأصلي لكل كارد لاستعادته
  const originalDisplay = new Map();
  cards.forEach(card => originalDisplay.set(card, getComputedStyle(card).display || "block"));

  input.addEventListener("input", function () {
    const q = this.value.trim().toLowerCase();
    let shown = 0;

    cards.forEach(card => {
      const name = (card.querySelector("h3")?.textContent || "").toLowerCase();
      if (!q || name.includes(q)) {
        card.style.display = originalDisplay.get(card) || "";
        shown++;
      } else {
        card.style.display = "none";
      }
    });

    noResults.style.display = shown ? "none" : "block";
  });
});