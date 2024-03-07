// When using this, the function needs to return true or false
const isString = (value: unknown): value is string => typeof value === "string";

const handleData = (data: unknown) => {
    if (isString(data)) {
        console.log(data.toLowerCase());
    }
};

handleData(200);
handleData("FACEBOOK");
