function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMeal(
      "Baguette",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada velit vitae enim rutrum, ac varius nisl pellentesque. Nulla facilisi. Vestibulum gravida orci mauris, in euismod erat fermentum eget."
    )
  );
  menu.appendChild(
    createMeal(
      "Burger",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada velit vitae enim rutrum, ac varius nisl pellentesque. Nulla facilisi. Vestibulum gravida orci mauris, in euismod erat fermentum eget."
    )
  );
  menu.appendChild(
    createMeal(
      "Cheesecake",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada velit vitae enim rutrum, ac varius nisl pellentesque. Nulla facilisi. Vestibulum gravida orci mauris, in euismod erat fermentum eget."
    )
  );
  menu.appendChild(
    createMeal(
      "Pancakes",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada velit vitae enim rutrum, ac varius nisl pellentesque. Nulla facilisi. Vestibulum gravida orci mauris, in euismod erat fermentum eget."
    )
  );
  menu.appendChild(
    createMeal(
      "Pizza",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada velit vitae enim rutrum, ac varius nisl pellentesque. Nulla facilisi. Vestibulum gravida orci mauris, in euismod erat fermentum eget."
    )
  );
  menu.appendChild(
    createMeal(
      "Ramen",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada velit vitae enim rutrum, ac varius nisl pellentesque. Nulla facilisi. Vestibulum gravida orci mauris, in euismod erat fermentum eget."
    )
  );

  return menu;
}

function createMeal(mealName, description) {
  const mealItem = document.createElement("div");
  mealItem.classList.add("meal-item");

  const foodName = document.createElement("h2");
  foodName.textContent = mealName;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `/dist/images/menu_images/${mealName.toLowerCase()}.png`;
  foodImage.alt = `${mealName.toLowerCase()}`;

  mealItem.appendChild(foodImage);
  mealItem.appendChild(foodName);
  mealItem.appendChild(foodDescription);

  return mealItem;
}

function displayMenu() {
  const main = document.querySelector(".tab-content");
  main.textContent = ""; // Why does this fix duplicating menu div?
  main.appendChild(createMenu());
}

export { displayMenu };
