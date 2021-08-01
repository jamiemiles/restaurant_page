import { displayMenu } from "./menu";
import { displayHome } from "./home";
import { displayContact } from "./contact";

function createNav() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  ul.classList.add("nav-links");

  const home = document.createElement("li");
  home.classList.add("button-nav", "active");
  home.textContent = "Home";
  home.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;

    setActiveTab(home);
    displayHome();
  });

  const menu = document.createElement("li");
  menu.classList.add("button-nav");
  menu.textContent = "Menu";
  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveTab(menu);
    displayMenu();
  });

  const contact = document.createElement("li");
  contact.classList.add("button-nav");
  contact.textContent = "Contact";
  contact.addEventListener("click", (e) => {
    if (e.target.classList.contains(" active")) {
      return;
    }
    setActiveTab(contact);
    displayContact();
  });

  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(contact);
  nav.appendChild(ul);
  nav.appendChild(createHamburger());

  return nav;
}

function createHamburger() {
  const hamburger = document.createElement("div");
  hamburger.classList.add("hamburger");

  for (let i = 0; i < 3; i++) {
    const div = document.createElement("div");
    div.classList.add("line");
    hamburger.appendChild(div);
  }
  return hamburger;
}

function hamburgerAnimation() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const lines = document.querySelectorAll(".line");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("animate");
  });
  lines.forEach((line) => {
    line.addEventListener("click", () => {
      line.classList.toggle("animate");
    });
  });
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("tab-content");
  return main;
}

function setActiveTab(button) {
  const hamburger = document.querySelector(".hamburger");
  hamburger.classList.remove("animate");
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.remove("open");
  const buttons = document.querySelectorAll(".button-nav");
  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });
  button.classList.add("active");
}

function appendToContent() {
  const content = document.getElementById("content");
  content.appendChild(createNav());
  content.appendChild(createMain());
  displayHome();
}

export { appendToContent };
export { hamburgerAnimation };
