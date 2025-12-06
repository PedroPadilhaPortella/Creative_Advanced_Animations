const projects = [
  "00_clip_path_property",
  "01_split_loading_effect",
  "02_wave_animation",
  "03_images_hover_effect",
  "04_popup_card_animation",
  "05_black_and_white_effect",
  "06_image_to_circle_hover_effect",
  "07_card_image_hover_effect",
  "08_menu_split_effect",
  "09_button_hover_effect",
  "10_new_year_animation",
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
      <a href="11-clip_path_animations/${project}.html">
        <p>${id} - ${projectData.map(capitalize).join(' ')}</p>
        <p><span>View Projects</span> <i class="fas fa-arrow-right"></i></p>
      </a>
    `;

    projectsList.append(card);
  });
}