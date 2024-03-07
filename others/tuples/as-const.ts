const getText = (selector: string) =>
    // : null | [HTMLElement, string]
    {
        const element = document.querySelector<HTMLElement>(selector);

        if (element) return [element, element.innerText] as const; // as const define readOnly
        return null;
    };

const buttonText = getText("#button");

if (buttonText) {
    // ! ERROR because as const define readOnly
    // buttonText[0].classList = "button";
}
