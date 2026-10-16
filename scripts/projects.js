export const projects = [
  {
    name: "Novasatck",
    description: "Landing page de exemplo para apresentar um produto fictício, com seções de benefícios e chamada para ação.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    demo: "https://example.com/SUBSTITUIR-demo-1",
    repo: "https://example.com/SUBSTITUIR-repo-1",
    hue: 218,
  },

];

function createElement(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function createLink(href, label, projectName) {
  const link = createElement("a", "btn btn--ghost", label);
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `${label} — ${projectName} (abre em nova aba)`);
  return link;
}

function createCard(project) {
  const item = createElement("li");
  const card = createElement("article", "card project");
  const thumb = createElement("div", "project__thumb");
  thumb.setAttribute("aria-hidden", "true");
  thumb.style.setProperty("--hue", project.hue);

  const body = createElement("div", "project__body");
  const tags = createElement("ul", "tags");
  project.stack.forEach((tech) => tags.append(createElement("li", "", tech)));

  const links = createElement("div", "project__links");
  if (project.demo) links.append(createLink(project.demo, "Demonstração", project.name));
  if (project.repo) links.append(createLink(project.repo, "Repositório", project.name));

  body.append(
    createElement("p", "badge", "Projeto de demonstração"),
    createElement("h3", "", project.name),
    createElement("p", "", project.description),
    tags,
    links
  );
  card.append(thumb, body);
  item.append(card);
  return item;
}

export function renderProjects(container) {
  if (!container) return;
  container.replaceChildren(...projects.map(createCard));
}
