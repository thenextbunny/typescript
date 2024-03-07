// @ts-expect-error: redeclare block-scoped variable
const button = document.querySelector("button");

const handleClick = (event: MouseEvent) => {
    console.log(event);
};

button?.addEventListener("click", handleClick);
