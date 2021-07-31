function getContent() {
  const content = document.getElementById("content");
  return { content };
}

const createNav = () => {
  const header = document.createElement("header");
  const ul = document.createElement("ul");
  ul.classList.add(".nav-bar");
  header.appendChild(ul);
};

function createBackgroundImage() {
  const div = document.createElement("div");
  div.classList.add(".background-img");
  getContent().content.appendChild(div);
}

const createHeader = () => {
  const header = document.createElement("header");
};

const createButton = () => {
  const div = document.createElement("div");
  div.classList.add(".btn-wrapper");
  const enterButton = document.createElement("button");
  enterButton.classList.add(".enter-btn");
  div.appendChild(enterButton);
};

export default createBackgroundImage();
