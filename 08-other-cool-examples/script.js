const projects = [
  "01_smoky_fade_out_text_effect",
  "02_fill_text_effect",
  "03_social_media_icons_hover_effect",
  "04_rotated_border_hover_effect",
  "05_open_close_text_animation",
  "06_blur_and_focus_text_effect",
  "07_sniper_blur_and_focus_text_effect",
  "08_stacked_card_hover_effect",
  "09_text_clip_mask_parallax_scrolling_effect",
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
      <a href="08-other-cool-examples/${project}.html">
        <p>${id} - ${projectData.map(capitalize).join(' ')}</p>
        <p><span>View Projects</span> <i class="fas fa-arrow-right"></i></p>
      </a>
    `;

    projectsList.append(card);
  });
}