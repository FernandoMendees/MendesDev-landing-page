import { initNavigation } from "./navigation.js";
// import { renderProjects } from "./projects.js";

function updateYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
}

initNavigation();
//renderProjects(document.getElementById("projects-list"));
updateYear();
