function createHeading() {
  const aboutUs = document.createElement("section");
  aboutUs.classList.add("about-us");
  const h1 = document.createElement("h1");
  h1.classList.add("title");
  h1.textContent = "The Simmy One";
  aboutUs.appendChild(h1);
  return aboutUs;
}

function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");
  home.appendChild(createHeading());
  return home;
}

function displayHome() {
  const main = document.querySelector(".tab-content");
  main.textContent = "";
  main.appendChild(createHome());
}

export { displayHome };
