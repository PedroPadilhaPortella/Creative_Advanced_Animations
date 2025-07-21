const projects = [
  "01_growing_borders_menu_effect",
  "02_background_and_borders_menu_effect",
  "03_splitted_background_menu_effect",
  "04_2_moving_bottom_borders_menu_effect",
  "05_blurry_menu_effect",
  "06_moving_place_menu_effect",
  "07_borders_and_background_menu_effect",
  "08_sniper_menu_effect",
  "09_rotation_menu_effect",
  "10_colorful_layered_menu_effect",
  "11_background_color_menu_effect",
  "12_cursor_hover_menu_effect",
  "13_text_fading_menu_effect",
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