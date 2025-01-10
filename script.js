const clearButton = document.querySelectorAll(`button[id="1.01"]`);
const firstRowColorButtons = document.querySelectorAll(`button[id^="1."]:not([id="1.01"])`);
const firstColumnColorButtons = document.querySelectorAll(`button[id$=".01"]:not([id="1.01"])`);
const changeableButtons = document.querySelectorAll(`button:not([id^="1."]):not([id$=".01"])`);

clearButton.forEach((button) => {
  button.addEventListener("click", () => {
    clear(button);
  });
});

firstRowColorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    changeColumnColor(button);
  });
});

firstColumnColorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    changeRowColor(button);
  });
});

changeableButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`blank button ${button.id} clicked!`);
  });
});

function clear(button) {
  console.log("cleared!");
  changeableButtons.forEach((button) => {
    button.style.backgroundColor = "rgb(255, 255, 255)";
  });
}

function changeColumnColor(button) {
  console.log(`column ${button.id} change!`);
  let buttonSuffix = button.id.slice(-3);
  let escapedSuffix = buttonSuffix.replace(".", "\\.");

  let columnButtons = Array.from(document.querySelectorAll(`button[id$=${escapedSuffix}]`));
  columnButtons = columnButtons.filter((colButton) => colButton !== button);

  let parentColor = window.getComputedStyle(button).backgroundColor;

  columnButtons.forEach((btn, index) => {
    setTimeout(() => {
      btn.style.backgroundColor = parentColor;
    }, 500 * index);
  });
}

function changeRowColor(button) {
  console.log(`row ${button.id} change!`);
}
