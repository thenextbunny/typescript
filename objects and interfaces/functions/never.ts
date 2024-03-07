const abort = (message: string): never => {
    throw new Error(message);
};

abort("Break the script");
console.log("Never happen");
