/* =================================== This is toggle menu functionality ============================== */

const setting_menu = document.querySelector(".setting-menu");

const settingMenu_toggle = () => {
  setting_menu.classList.toggle("show");
};

/* =================================== This is Dark Mode functionality ============================== */

const dark_btn = document.querySelector("#dark-btn");

dark_btn.addEventListener("click", () => {
  dark_btn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") === "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

/* ======================= This is Dark Mode functionality with local storage ======================== */

if (localStorage.getItem("theme") === "light") {
  dark_btn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
}

// ----------------  condition -------------
else if (localStorage.getItem("theme") === "dark") {
  dark_btn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
}
// ----------------  condition -------------
else {
  localStorage.setItem("theme", "light");
}

/* ======================= This is loading effect on webpage ======================== */

const loading_page = document.getElementById("loading-page");

window.onload = () => {
  loading_page.style.display = "none";
};
