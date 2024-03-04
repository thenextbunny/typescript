/**
 * Fix this
const input = document.querySelector("input");

const total = localStorage.getItem("total");

input.value = total;

const handleGain = (value) => {
  const p = document.querySelector("p");

  p.innerHTML = `Total: ${value + 100 - value * 0.2}`;
};

handleGain(input.value);

const handleTotal = () => {
  const value = Number(input.value);

  localStorage.setItem("total", value);
};

input.addEventListener("keyup", handleTotal);
*/

const input = document.querySelector("input");

const total = localStorage.getItem("total");

const handleGain = (value: number) => {
  const p = document.querySelector("p");

  if (p) {
    p.innerHTML = `Total: ${value + 100 - value * 0.2}`;
  }
};

if (input && total) {
  input.value = total;

  handleGain(Number(input.value));
}

const handleTotal = () => {
  if (input) {
    localStorage.setItem("total", input.value);
    handleGain(Number(input.value));
  }
};

input?.addEventListener("keyup", handleTotal);
