const projects = [
  "01_rotating_button_effect",
  "02_swipe_button_effect",
  "03_rotate_before_and_after_button_effect",
  "04_stretching_button_effect",
  "05_swipe_button_effect_with_content",
  "06_glowing_button_effect",
  "07_two_layers_swapping_button_effect",
  "08_text_scaling_button_effect",
  "09_circular_swapping_button_effect",
  "10_rotating_three_layers_button_effect",
  "11_layers_swapping_button_effect",
  "12_three_circles_button_effect",
  "13_hover_button_effect",
  "14_splited_button_effect",
  "15_border_swapping_button_effect",
  "16_border_growing_button_effect",
  "17_first_letter_rotating_button_effect",
  "18_4_borders_growing_button_effect",
  "19_2_cuts_button_effect",
  "20_2_parts_button_effect",
  "21_pulsing_button_effect",
  "22_diagonal_swipe_button_effect",
  "23_four_lines_button_effect",
  "24_glassmorphism_button_effect",
];

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const projectsList = document.querySelector('.project-list');

renderButtonEffectProjects();

function renderButtonEffectProjects() {

  projects.forEach((project) => {
    const projectData = project.split('_');
    const id = projectData.shift();

    const card = document.createElement('div');
    card.classList.add('project-card');

    card.innerHTML = `
      <a href="04-creative_button_effects_with_css_transform/${project}.html">
        <p>${id} - ${projectData.map(capitalize).join(' ')}</p>
        <p><span>View Projects</span> <i class="fas fa-arrow-right"></i></p>
      </a>
    `;

    projectsList.append(card);
  });
}