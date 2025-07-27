const projects = [
  "01_background_translation_card_effect",
  "02_expandable_card_effect",
  "03_captain_marvel_card_effect",
  "04_99_border_card_effect",
  "05_double_face_card_effect",
  "06_layered_card_effect",
  "07_scaling_card_effect",
  "08_product_card_design",
  "09_product_card_design_2",
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
      <a href="07-creative_card_effects/${project}.html">
        <p>${id} - ${projectData.map(capitalize).join(' ')}</p>
        <p><span>View Projects</span> <i class="fas fa-arrow-right"></i></p>
      </a>
    `;

    projectsList.append(card);
  });
}