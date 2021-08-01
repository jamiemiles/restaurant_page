function createContactForm() {
  const contact = document.createElement("div");
  contact.classList.add("contact");
  const form = document.createElement("div");
  form.classList.add("form");
  const fullName = document.createElement("input");
  fullName.placeholder = "Full Name";
  const email = document.createElement("input");
  email.placeholder = "Email Address";
  email.type = "email";
  const message = document.createElement("textarea");
  message.placeholder = "Message";
  const contactUs = document.createElement("h2");
  contactUs.textContent = "Contact Us";
  const hearFromYou = document.createElement("h3");
  hearFromYou.textContent = "We'd love to hear from you!";
  const submitButton = document.createElement("button");
  submitButton.classList.add("send-btn");
  submitButton.textContent = "Send Message";

  form.appendChild(fullName);
  form.appendChild(email);
  form.appendChild(message);
  form.appendChild(submitButton);
  contact.appendChild(contactUs);
  contact.appendChild(hearFromYou);
  contact.appendChild(form);

  return contact;
}

function displayContact() {
  const main = document.querySelector(".tab-content");
  main.textContent = "";
  main.appendChild(createContactForm());
}

export { displayContact };
