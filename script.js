document.getElementById("greetBtn").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value.trim();
  const greeting = document.getElementById("greeting");

  if (name) {
    greeting.textContent = `Hello, ${name}`;
  } else {
    greeting.textContent = "Hello";
  }
});

const colors = ["red", "blue", "green", "yellow"];
colors.forEach((color) => {
  const box = document.getElementById(color);
  box.addEventListener("click", function () {
    box.style.backgroundColor = color;
    box.style.color = "white";
  });
});
