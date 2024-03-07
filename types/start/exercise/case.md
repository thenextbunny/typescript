Fix the code

```js
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
```
