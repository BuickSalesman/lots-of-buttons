const allButtons = document.querySelectorAll("button");
const clearButton = document.querySelectorAll(`button[id="1.01"]`);
const firstRowColorButtons = document.querySelectorAll(`button[id^="1."]:not([id="1.01"])`);
const firstColumnColorButtons = document.querySelectorAll(`button[id$=".01"]:not([id="1.01"])`);

clearButton.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`Clear button clicked!`);
  });
});

firstRowColorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`Button ${button.id} clicked!`);
  });
});

firstColumnColorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`Button ${button.id} clicked!`);
  });
});
