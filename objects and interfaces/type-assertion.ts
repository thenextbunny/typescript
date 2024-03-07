/* eslint-disable @typescript-eslint/no-unused-vars */

// Without as, TypeScript don't show the methods of video
const videoElementWithoutAs = document.querySelector("video");

videoElementWithoutAs?.volume;

// With as, TypeScript show the methods of video, be careful!
// With as, it has to be a legacy interface
const videoElementWithAs = document.querySelector("video") as HTMLVideoElement;

videoElementWithAs.volume;

// Other ways

// Element needs to exist
const video1 = document.querySelector("video")!;

const video2 = document.querySelector("video") as HTMLVideoElement;

const video3 = <HTMLVideoElement>document.querySelector(".video");

// Can return HTMLVideoElement or null, more safer
const video4 = document.querySelector<HTMLVideoElement>("video");

const video5 = document.querySelector(".video");

(video5 as HTMLVideoElement).volume;
