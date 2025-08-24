const root = document.documentElement;
const themeTabClass = ".theme-tab";
const themeToggleClass = ".theme-toggle";
const themeContainerClass = ".theme-container";
const active = "active";
const openThemeBtn = document.querySelector(themeTabClass);
const toggleThemeBtn = document.querySelector(themeToggleClass);
const themeContainer = document.querySelector(themeContainerClass);

const toggleDarkIcon = `<i class="fa-solid fa-toggle-on"></i>`;
const toggleLightIcon = `<i class="fa-solid fa-toggle-off"></i>`;

const dataTheme = "data-theme";
const theme = "theme";
const light = "light";
const dark = "dark";
let currentTheme = localStorage.getItem(theme);

openThemeBtn.addEventListener("click", function () {
  themeContainer.classList.contains(active)
    ? themeContainer.classList.remove(active)
    : themeContainer.classList.add(active);
});

const toggleTheme = (val) => {
  console.log(val);
  if (val == dark) {
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
    toggleThemeBtn.innerHTML = toggleLightIcon;
  } else {
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
    toggleThemeBtn.innerHTML = toggleDarkIcon;
  }
};

if (currentTheme) {
  root.setAttribute(dataTheme, currentTheme);

  if (currentTheme === dark) {
    toggleThemeBtn.innerHTML = toggleDarkIcon;
    root.setAttribute(dataTheme, dark);
  } else {
    toggleThemeBtn.innerHTML = toggleLightIcon;
    root.setAttribute(dataTheme, light);
  }
}

toggleThemeBtn.addEventListener("click", function () {
  let cur = root.getAttribute(dataTheme);
  toggleTheme(cur);
});

//close modal on bg click
document.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".full-modal.active")) {
    document.querySelector(".full-modal.active").classList.remove("active");
  }
});
