const projects = [
  "01_growing_borders_menu_effect",
];

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const projectsList = document.querySelector('.project-list');

renderProjects();

function renderProjects() {

  projects.forEach((project) => {
    const projectData = project.split('_');
    const id = projectData.shift();

    const card = document.createElement('div');
    card.classList.add('project-card');

    card.innerHTML = `
      <a href="06-creative_menu_effects/${project}.html">
        <p>${id} - ${projectData.map(capitalize).join(' ')}</p>
        <p><span>View Projects</span> <i class="fas fa-arrow-right"></i></p>
      </a>
    `;

    projectsList.append(card);
  });
}