const projects = [
  "01_text_animation_with_javascript",
  "02_website_parallax_effect with_javascript",
  "03_expandable_card",
  "04_colorful_text_effect",
  "05_scroll_clip_path_animation",
  "06_scroll_webiste_sections",
  "07_moving_background_image_on_scroll",
  "08_website_animated_banner",
  "09_night_mode_road_animation",
  "10_circular_navigation_menu",
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
      <a href="12-javascript_animations_and_effects/${project}.html">
        <p>${id} - ${projectData.map(capitalize).join(' ')}</p>
        <p><span>View Projects</span> <i class="fas fa-arrow-right"></i></p>
      </a>
    `;

    projectsList.append(card);
  });
}