const projects = [
  "01_rotating_caption_image_effect",
  "02_swapping_caption_image_effect",
  "03_slide_caption_image_effect",
  "04_partial_slide_caption_image_effect",
  "05_2_layers_slide_image_effect",
  "06_zoom_in_image_effect",
  "07_diagonal_swipe_image_effect",
  "08_delayed_items_image_effect",
  "09_scale_in_out_image_effect",
  "10_fade_in_out_image_effect",
  "11_spinning_fade_image_effect",
  "12_split_on_hover_image_effect",
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
      <a href="05-creative_image_effects_using_css_transform/${project}.html">
        <p>${id} - ${projectData.map(capitalize).join(' ')}</p>
        <p><span>View Projects</span> <i class="fas fa-arrow-right"></i></p>
      </a>
    `;

    projectsList.append(card);
  });
}