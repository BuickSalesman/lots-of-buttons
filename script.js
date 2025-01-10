const allButtons = document.querySelectorAll("button");

const firstRowColorButtons = document.querySelectorAll(`button[id^="1."]:not([id="1.01"])`);

firstRowColorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`Button ${button.id} clicked!`);
  });
});
