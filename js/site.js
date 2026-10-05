// Mobile navigation
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Support page: filter questions as the visitor types
const search = document.querySelector("#faq-search");
if (search) {
  const groups = [...document.querySelectorAll(".faq-group")];
  const empty = document.querySelector(".no-results");
  search.addEventListener("input", () => {
    const words = search.value.toLowerCase().split(/\s+/).filter(Boolean);
    let shown = 0;
    for (const group of groups) {
      let groupShown = 0;
      for (const item of group.querySelectorAll("details.faq")) {
        const text = item.textContent.toLowerCase();
        const match = words.every((word) => text.includes(word));
        item.hidden = !match;
        if (match) groupShown += 1;
      }
      group.hidden = groupShown === 0;
      shown += groupShown;
    }
    if (empty) empty.style.display = shown === 0 ? "block" : "none";
  });
}
