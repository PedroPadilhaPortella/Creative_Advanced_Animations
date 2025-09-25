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
  "10_text_background_animation",
  "11_bouncing_balls_animation",
  "12_raining_animation_effect",
  "13_icon_hover_animation_effect",
  "14_loading_text_animation",
  "15_wavy_button_hover_effect",
  "16_pulse_animation_effect",
  "17_simple_image_slider",
  "18_background_color_animation",
  "19_newton_cradle_animation",
  "20_colorful_loading_animation",
  "21_moving_squares_loading_animation",
  "22_text_reveal_loading_animation",
  "23_rotating_ring_loading_animation",
  "24_line_loading_animation",
  "25_growing_lines_loading_animation",
  "26_ring_rotation_loading_animation",
  "27_windows_loading_animation",
  "28_color_loading_animation",
  "29_background_moving_boxes_animation",
  "30_hexagon_loading_animation",
  "31_expanding_line_menu_effect",
  "32_background_growing_boxes_animation",
  "33_colorful_liquid_glass_animation",
  "34_fancy_border_loading_animation",
  "35_rotating_glowing_loading_animation",
  "36_drawing_button_hover_animation",
  "37_circles_animation",
  "38_glowing_loader_animation",
  "39_cloud_rain_drops_animation",
  "40_text_fading_effect",
  "41_neon_text_reveal_effect",
  "42_dots_loading_animation",
  "43_neon_button_effect",
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