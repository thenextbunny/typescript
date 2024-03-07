// 2. Create a global variable UserData on the window, it will be any object

interface UserData {
    name?: string;
    email?: string;
    cpf?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Window {
    UserData: UserData;
}

window.UserData = {};

// 6. Create a User Type Guard, to check if the localStorage value is compatible with UserData
const validJSON = (str: string): str is string => {
    try {
        JSON.parse(str);

        return true;
    } catch (error) {
        return false;
    }
};

const isUserData = (data: unknown): data is UserData => {
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

                    window.UserData[key as keyof UserData] = value;
                }
            });
        }
    }
};

localStorageData();

const handleForm = ({ target }: KeyboardEvent) => {
    if (target instanceof HTMLInputElement) {
        // 4. When the event occurs, add the {[id]: value} to UserData
        window.UserData[target.id as keyof UserData] = target.value;

        // 5. Save UserData in localStorage
        localStorage.setItem("UserData", JSON.stringify(window.UserData));

        console.log(window.UserData);
    }
};

// 3. Add a keyup event to the form
const form = document.querySelector<HTMLFormElement>("form");

form?.addEventListener("keyup", handleForm);
