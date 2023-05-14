// ------------------------------------- this is a toggle menu functionality ------------------------------

const profile_menu_warp = document.querySelector(".profile-menu-warp");

let toggleMenu = () => {
  profile_menu_warp.classList.toggle("open_menu");
};

// ------------------------------------- this is a hamburger icon  ------------------------------

const hamburger = document.querySelector(".hamburger");
const mobile_nav = document.querySelector(".navbar-center ul");

hamburger.addEventListener("click", () => {
  mobile_nav.classList.toggle("show");
});

// ------------------------------------- this is a toggle btn  ------------------------------

const toggle_btn = document.querySelector(".toggle-btn");
const toggle_btn_span = document.querySelector(".toggle-btn span");
console.log(toggle_btn_span);

toggle_btn.addEventListener("click", () => {
  toggle_btn_span.classList.toggle("dark_on");
  document.body.classList.toggle("dark_mode");
  if (localStorage.getItem("theme") === "light_mod") {
    localStorage.setItem("theme", "dark_mode");
  } else {
    localStorage.setItem("theme", "light_mod");
  }
});

// ------------------------------------- Dark mode save in local_Storage  ------------------------------

if (localStorage.getItem("theme") === "light_mod") {
  toggle_btn_span.classList.remove("dark_on");
  document.body.classList.remove("dark_mode");
}

// ------------------------------------
else if (localStorage.getItem("theme") === "dark_mode") {
  toggle_btn_span.classList.add("dark_on");
  document.body.classList.add("dark_mode");
}

// -------------------------------------
else {
  localStorage.setItem("theme", "light_mod");
}

// ------------------------------------- loading effect  ------------------------------

const loading = document.querySelector(".loading");

window.onload = () => {
  loading.style.display = "none";
};
