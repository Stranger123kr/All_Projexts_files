// ========================== color change effect  =============================
const color_change = document.querySelector(".color_change");

color_change.addEventListener("click", () => {
  document.documentElement.classList.toggle("Dark_Mod");
  if (localStorage.getItem("theme") === "light_mod") {
    localStorage.setItem("theme", "dark_mod");
  } else {
    localStorage.setItem("theme", "light_mod");
  }
});

// ========================== store color change effect in local_storage  =============================

if (localStorage.getItem("theme") === "light_mod") {
  document.documentElement.classList.remove("Dark_Mod");
}
// =======================================
else if (localStorage.getItem("theme") === "dark_mod") {
  document.documentElement.classList.add("Dark_Mod");
}
// =======================================
else {
  localStorage.setItem("theme", "light_mod");
}

// ========================== navbar mobile effect  =============================

const show = document.querySelector(".show");
const nav_links = document.querySelector(".nav_links");

show.addEventListener("click", () => {
  nav_links.classList.toggle("show");
});
