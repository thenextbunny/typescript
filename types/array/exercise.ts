const fetchCourses = async () => {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();

  logCourses(data);
};

interface Course {
  aulas: number;
  gratuito: boolean;
  horas: number;
  id: number[]; // Array<number>
  nivel: "iniciante" | "avancado";
  nome: string;
  tags: string[]; // Array<string>
}

const logCourses = (courses: Course[]) => {
  courses.forEach((course) => {
    document.body.innerHTML += `
        <div>
            <h1 style="color: ${
              course.nivel === "iniciante" ? "blue" : "red"
            }"};">${course.nome}</h1>
            <p>${course.aulas} aulas</p>
            <p>${course.horas} horas</p>
            <p>${course.gratuito ? "É" : "Não é"} gratuito</p>
            <p>${course.tags.join(", ")}</p>
            <p></p>
            <p></p>
        </div>
    `;
  });
};

fetchCourses();
