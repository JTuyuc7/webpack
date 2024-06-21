import styles from './clearButton.css';
const clearElement = document.createElement("button");
clearElement.innerHTML = "Clear";
clearElement.classList.add("button");
clearElement.classList.add("button1");
clearElement.onclick = function () {
  alert("Clearing the list");
}
document.body.appendChild(clearElement);
clearElement.classList.add([styles.button1]);