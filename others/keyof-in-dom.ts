interface Elements {
    a: HTMLAnchorElement;
    button: HTMLButtonElement;
    p: HTMLParagraphElement;
    video: HTMLVideoElement;
}

const select1 = (selector: keyof Elements) => document.querySelector(selector);

// * GOOD
select1("button");

// ! ERROR
// select1("video");

const select2 = <Key extends keyof Elements>(selector: Key): Elements[Key] | null =>
    document.querySelector(selector);

select2("button")?.onclick;
select2("video")?.volume;
