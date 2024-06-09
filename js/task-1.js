// Знаходимо елемент ul з id 'categories'
const categories = document.getElementById("categories");

// Знаходимо всі елементи li з класом 'item' всередині ul#categories
const categoryItems = categories.querySelectorAll(".item");

// Виводимо кількість категорій
console.log(`Number of categories: ${categoryItems.length}`);

// Проходимо по кожному елементу li.item
categoryItems.forEach((item) => {
  // Знаходимо заголовок h2 всередині кожного елементу li.item
  const categoryName = item.querySelector("h2").textContent;

  // Знаходимо всі вкладені елементи li всередині ul кожного li.item
  const itemsCount = item.querySelectorAll("ul li").length;

  // Виводимо назву категорії та кількість елементів
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${itemsCount}`);
});
