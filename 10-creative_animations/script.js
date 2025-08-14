const projects = [
  "01_floating_text_animation_effect",
  "02_rotating_loading_animation",
  "03_driving_animation",
  "04_text_rotator_animation",
  "05_animated_image_pattern",
  "06_shaking_button_hover_effect",
  "07_animated_button_hover_effect",
  "08_lighting_text_animation",
  "09_heartbeat_animation",
  "10_text_backgrounf_animation",
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
      <a href="10-creative_animations/${project}.html">
        <p>${id} - ${projectData.map(capitalize).join(' ')}</p>
        <p><span>View Projects</span> <i class="fas fa-arrow-right"></i></p>
      </a>
    `;

    projectsList.append(card);
  });
}