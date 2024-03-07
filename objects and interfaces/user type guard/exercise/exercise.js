"use strict";
const isCourse = (course) => {
    if (course &&
        typeof course === "object" &&
        "nome" in course &&
        "tags" in course &&
        "horas" in course)
        return true;
    return false;
};
const handleCourse = (data) => {
    if (Array.isArray(data)) {
        data.filter(isCourse).forEach((item) => (document.body.innerHTML += `
                <div>
                    <h1>Nome: ${item.nome}</h1>
                    <p>Horas: ${item.horas}</p>
                    <p>Tags: ${item.tags.join(", ")}</p>
                </div>
            `));
    }
};
const getCourses = async () => {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    handleCourse(data);
    return data;
};
getCourses();
