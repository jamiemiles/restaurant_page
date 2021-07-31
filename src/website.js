function createNav() {
  const hamburger = document.querySelector("hamburger");
  // Create nav element
  const nav = document.createElement("nav");

  const ul = document.createElement("ul");
  ul.classList.add("nav-links");

  const about = document.createElement("li");
  const a1 = document.createElement("a");
  a1.href = "#";
  about.appendChild(a1);
  a1.textContent = "About";

  const contact = document.createElement("li");
  const a2 = document.createElement("a");
  a2.href = "#";
  contact.appendChild(a2);
  a2.textContent = "Contact";

  const menu = document.createElement("li");
  const a3 = document.createElement("a");
  a3.href = "#";
  menu.appendChild(a3);
  a3.textContent = "Menu";

  ul.appendChild(about);
  ul.appendChild(contact);
  ul.appendChild(menu);
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

function createHeading() {
  const aboutUs = document.createElement("section");
  aboutUs.classList.add("about-us");
  const h1 = document.createElement("h1");
  h1.classList.add("title");
  h1.textContent = "The Simmy One";
  aboutUs.appendChild(h1);
  return aboutUs;
}

function createButton() {
  const div = document.createElement("div");
  div.classList.add("btn-wrapper");
  const enterButton = document.createElement("button");
  enterButton.classList.add("enter-btn");
  enterButton.textContent = "Enter";
  div.appendChild(enterButton);
  return div;
}

function appendToContent() {
  const content = document.getElementById("content");
  content.appendChild(createNav());
  content.appendChild(createHeading());
  content.appendChild(createButton());
  return content;
}

function hamburgerAnimation() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const enterButton = document.querySelector(".enter-btn");
  const lines = document.querySelectorAll(".line");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("animate");
    setTimeout(() => {
      enterButton.classList.toggle("remove");
    }, 100);
  });

  lines.forEach((line) => {
    line.addEventListener("click", () => {
      line.classList.toggle("animate");
    });
  });
}
export { appendToContent };
export { hamburgerAnimation };
