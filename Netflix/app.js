//  ============================ loading change effect ============================
const loading = document.querySelector(".loading");
window.onload = () => {
  loading.style.display = "none";
};

// ============================ Color change effect ============================

const white_mod = document.querySelector(".white_mod");

white_mod.addEventListener("click", () => {
  document.documentElement.classList.toggle("white_mode_color");

  if (localStorage.getItem("color_mod") === "yellow_mod") {
    localStorage.setItem("color_mod", "dark_mod");
  } else {
    localStorage.setItem("color_mod", "yellow_mod");
  }
});

// ================ to save a color into localStorage ===========

if (localStorage.getItem("color_mod") === "dark_mod") {
  document.documentElement.classList.remove("white_mode_color");
}

// =====
else if (localStorage.getItem("color_mod") === "yellow_mod") {
  document.documentElement.classList.add("white_mode_color");
}

// =====
else {
  localStorage.setItem("color_mod", "dark_mod");
}

// ==========================================================================================================

const language_btn = document.querySelectorAll(".language-btn");

// ================= These are titles ================================

const title_1 = document.querySelector(".header-content h1");
const title_2 = document.querySelector(".header-content h3");
const titles = document.querySelectorAll(".text-col h2");
const title_3 = document.querySelector(".faq h2");

// ===================== These are button ============================================

const button_1 = document.querySelector("nav button");
const buttons = document.querySelectorAll(".email-sign_up button");

// ================== These are para =================================

let placeholder = document.querySelectorAll(".email-sign_up input");

// ================== These are para =================================

const paras = document.querySelectorAll(".text-col p");
const head_para = document.querySelectorAll(".head_para");

// ================== These are labels =================================

const labels = document.querySelectorAll(".accordion label");

// ================== These are labels para =================================

const label_paras = document.querySelectorAll(".accordion p");

// ================== These are footer info =================================

const footer_call = document.querySelector(".footer h2");

// ================== These are footer links =================================

const links = document.querySelectorAll(".col a");

// ================== These are footer india =================================

const india = document.querySelector(".netflix_india span");

// ======================== Languages ==============================

let info = fetch("language.json")
  .then((response) => response.json())
  .then((data) => {
    // ==============================
    language_change(localStorage.getItem("language"));

    change_language_text();
    // this is a first btn for change language

    function change_language_text() {
      localStorage.getItem("language") === null
        ? ((language_btn[0].value = "English"),
          (language_btn[1].value = "English"))
        : ((language_btn[0].value = localStorage.getItem("language")),
          (language_btn[1].value = localStorage.getItem("language")));
    }

    // ===================  this is function for change language ========================

    function language_change() {
      // ============================================  English Language  =====================================

      if (localStorage.getItem("language") === "English") {
        title_1.innerText = data.English.title_1;
        title_2.innerText = data.English.title_2;
        title_3.innerText = data.English.title_3;

        // =======================================

        head_para[0].innerText = data.English.head_para;
        head_para[1].innerText = data.English.head_para;

        // =========================================
        button_1.innerText = data.English.button_1;
        buttons[0].innerText = data.English.buttons;
        buttons[1].innerText = data.English.buttons;

        // ================================================

        titles[0].innerText = data.English.titles[0];
        titles[1].innerText = data.English.titles[1];
        titles[2].innerText = data.English.titles[2];
        titles[3].innerText = data.English.titles[3];

        // ================================================

        paras[0].innerText = data.English.paras[0];
        paras[1].innerText = data.English.paras[1];
        paras[2].innerText = data.English.paras[2];
        paras[3].innerText = data.English.paras[3];

        // ================================================

        labels[0].innerText = data.English.labels[0];
        labels[1].innerText = data.English.labels[1];
        labels[2].innerText = data.English.labels[2];
        labels[3].innerText = data.English.labels[3];
        labels[4].innerText = data.English.labels[4];
        labels[5].innerText = data.English.labels[5];

        // ================================================

        label_paras[0].innerText = data.English.label_paras[0];
        label_paras[1].innerText = data.English.label_paras[1];
        label_paras[2].innerText = data.English.label_paras[2];
        label_paras[3].innerText = data.English.label_paras[3];
        label_paras[4].innerText = data.English.label_paras[4];
        label_paras[5].innerText = data.English.label_paras[5];
        label_paras[6].innerText = data.English.label_paras[6];
        label_paras[7].innerText = data.English.label_paras[7];
        label_paras[8].innerText = data.English.label_paras[8];

        // ================================================

        placeholder[0].setAttribute("placeholder", "Email address");
        placeholder[1].setAttribute("placeholder", "Email address");

        // ================================================

        footer_call.innerText = data.English.footer_call;

        // ================================================

        links[0].innerText = data.English.links[0];
        links[1].innerText = data.English.links[1];
        links[2].innerText = data.English.links[2];
        links[3].innerText = data.English.links[3];
        links[4].innerText = data.English.links[4];
        links[5].innerText = data.English.links[5];
        links[6].innerText = data.English.links[6];
        links[7].innerText = data.English.links[7];
        links[8].innerText = data.English.links[8];
        links[9].innerText = data.English.links[9];
        links[10].innerText = data.English.links[10];
        links[11].innerText = data.English.links[11];
        links[12].innerText = data.English.links[12];
        links[13].innerText = data.English.links[13];
        links[14].innerText = data.English.links[14];

        // ============================================

        india.innerText = data.English.india;

        // ============================================  Hindi Language  =====================================
      } else if (localStorage.getItem("language") === "Hindi") {
        title_1.innerText = data.Hindi.title_1;
        title_2.innerText = data.Hindi.title_2;
        title_3.innerText = data.Hindi.title_3;

        // =======================================

        head_para[0].innerText = data.Hindi.head_para;
        head_para[1].innerText = data.Hindi.head_para;

        // ========================================

        button_1.innerText = data.Hindi.button_1;

        // =======================================

        buttons[0].innerText = data.Hindi.buttons;
        buttons[1].innerText = data.Hindi.buttons;

        // =======================================

        titles[0].innerText = data.Hindi.titles[0];
        titles[1].innerText = data.Hindi.titles[1];
        titles[2].innerText = data.Hindi.titles[2];
        titles[3].innerText = data.Hindi.titles[3];

        // ================================================

        paras[0].innerText = data.Hindi.paras[0];
        paras[1].innerText = data.Hindi.paras[1];
        paras[2].innerText = data.Hindi.paras[2];
        paras[3].innerText = data.Hindi.paras[3];

        // ================================================

        labels[0].innerText = data.Hindi.labels[0];
        labels[1].innerText = data.Hindi.labels[1];
        labels[2].innerText = data.Hindi.labels[2];
        labels[3].innerText = data.Hindi.labels[3];
        labels[4].innerText = data.Hindi.labels[4];
        labels[5].innerText = data.Hindi.labels[5];

        // ================================================

        label_paras[0].innerText = data.Hindi.label_paras[0];
        label_paras[1].innerText = data.Hindi.label_paras[1];
        label_paras[2].innerText = data.Hindi.label_paras[2];
        label_paras[3].innerText = data.Hindi.label_paras[3];
        label_paras[4].innerText = data.Hindi.label_paras[4];
        label_paras[5].innerText = data.Hindi.label_paras[5];
        label_paras[6].innerText = data.Hindi.label_paras[6];
        label_paras[7].innerText = data.Hindi.label_paras[7];
        label_paras[8].innerText = data.Hindi.label_paras[8];

        // ================================================

        placeholder[0].setAttribute("placeholder", "ई-मेल एड्रेस");
        placeholder[1].setAttribute("placeholder", "ई-मेल एड्रेस");

        // ==================================================

        footer_call.innerText = data.Hindi.footer_call;

        // ================================================

        links[0].innerText = data.Hindi.links[0];
        links[1].innerText = data.Hindi.links[1];
        links[2].innerText = data.Hindi.links[2];
        links[3].innerText = data.Hindi.links[3];
        links[4].innerText = data.Hindi.links[4];
        links[5].innerText = data.Hindi.links[5];
        links[6].innerText = data.Hindi.links[6];
        links[7].innerText = data.Hindi.links[7];
        links[8].innerText = data.Hindi.links[8];
        links[9].innerText = data.Hindi.links[9];
        links[10].innerText = data.Hindi.links[10];
        links[11].innerText = data.Hindi.links[11];
        links[12].innerText = data.Hindi.links[12];
        links[13].innerText = data.Hindi.links[13];
        links[14].innerText = data.Hindi.links[14];

        // ============================================

        india.innerText = data.Hindi.india;
      }

      // ===================  this is event for change language ========================
    }

    // this is a first btn for change language

    language_btn[0].addEventListener("change", (e) => {
      localStorage.setItem("language", language_btn[0].value);
      language_change(localStorage.getItem("language"));
      change_language_text();
    });

    // this is a second btn for change language

    language_btn[1].addEventListener("change", (e) => {
      localStorage.setItem("language", language_btn[1].value);
      language_change(localStorage.getItem("language"));
      change_language_text();
    });
  });
