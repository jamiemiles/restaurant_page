function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMeal(
      "Baguette",
      "Straight from the heart of Italy, our award winning chef Simone Lawler will cook you her signature dish!"
    )
  );
  menu.appendChild(
    createMeal(
      "Burger",
      "Straight from the heart of Italy, our award winning chef Simone Lawler will cook you her signature dish!"
    )
  );
  menu.appendChild(
    createMeal(
      "Cheesecake",
      "Straight from the heart of Italy, our award winning chef Simone Lawler will cook you her signature dish!"
    )
  );
  menu.appendChild(
    createMeal(
      "Pancakes",
      "Straight from the heart of Italy, our award winning chef Simone Lawler will cook you her signature dish!"
    )
  );
  menu.appendChild(
    createMeal(
      "Pizza",
      "Straight from the heart of Italy, our award winning chef Simone Lawler will cook you her signature dish!"
    )
  );
  menu.appendChild(
    createMeal(
      "Ramen",
      "Straight from the heart of Italy, our award winning chef Simone Lawler will cook you her signature dish!"
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
  const main = document.getElementById("main");
  main.appendChild(createMenu());

  return main;
}

export { displayMenu };
