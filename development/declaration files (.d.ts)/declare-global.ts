// ! Be careful using this, because this is ignored and can be rewrite
declare global {
    interface User {
        name: string;
        username: `@${string}`;
    }
}

export const user: User = {
    name: "Paulo",
    username: "@paulo",
};
