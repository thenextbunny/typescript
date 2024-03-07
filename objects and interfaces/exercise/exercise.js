"use strict";
// 2. Create a global variable UserData on the window, it will be any object
window.UserData = {};
// 6. Create a User Type Guard, to check if the localStorage value is compatible with UserData
const validJSON = (str) => {
    try {
        JSON.parse(str);
        return true;
    }
    catch (error) {
        return false;
    }
};
const isUserData = (data) => {
    if (data && typeof data === "object" && ("name" in data || "email" in data || "cpf" in data))
        return true;
    return false;
};
// 7. On page refresh, fill in the localStorage values (if it is UserData) in the form and in window.UserData
const localStorageData = () => {
    const userData = localStorage.getItem("UserData");
    if (userData && validJSON(userData)) {
        const userObject = JSON.parse(userData);
        if (isUserData(userObject)) {
            Object.entries(userObject).forEach(([key, value]) => {
                const input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        }
    }
};
localStorageData();
const handleForm = ({ target }) => {
    if (target instanceof HTMLInputElement) {
        // 4. When the event occurs, add the {[id]: value} to UserData
        window.UserData[target.id] = target.value;
        // 5. Save UserData in localStorage
        localStorage.setItem("UserData", JSON.stringify(window.UserData));
        console.log(window.UserData);
    }
};
// 3. Add a keyup event to the form
const form = document.querySelector("form");
form?.addEventListener("keyup", handleForm);
