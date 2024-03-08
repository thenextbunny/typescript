// When we use import/export in a .ts file, the TypeScript will define the same as module. By the way, its scope is not global anymore.

// The globalSlidePlugin is in global scope and can be used in other files
const globalSlidePlugin = (selector: string) => {
    console.log("Slide create with selector", selector);
};

// When using export, the globalSlidePlugin is not accessible in global scope
// So, when using this, it's necessary to define <script type="module">
export const slidePlugin = (selector: string) => {
    console.log("Slide create with selector", selector);
};

console.log(globalSlidePlugin("#slide"));
console.log(slidePlugin(".slide"));
