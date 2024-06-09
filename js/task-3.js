// Отримуємо елементи
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Додаємо обробник події 'input' до елементу input#name-input
nameInput.addEventListener("input", () => {
  // Очищаємо значення від пробілів по краях
  const trimmedValue = nameInput.value.trim();

  // Перевіряємо, чи значення порожнє або складається тільки з пробілів
  if (trimmedValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    // Підставляємо очищене значення в span#name-output
    nameOutput.textContent = trimmedValue;
  }
});
