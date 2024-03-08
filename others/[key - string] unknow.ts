interface Post {
    title: string;
    autor: string;
    views: number;
    likes: number;
    tags: string[];
    [key: string]: unknown;
}

const post: Post = {
    title: "I love TypeScript",
    autor: "Andrew",
    views: 12,
    likes: 1,
    tags: ["TypeScript"],
    isPrivate: true,
};

console.log(post);
