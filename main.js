// Cache references to sections
const sections = {
  home: document.getElementById('home-section'),
  about: document.getElementById('about-section'),
  // Add more sections later if needed
};

// Show only the requested section and hide others
function showSection(sectionToShow) {
  Object.values(sections).forEach(sec => {
    sec.style.display = 'none';
  });
  sectionToShow.style.display = 'flex';
}

// Set the active class on navigation links
function setActiveLink(activeId) {
  document.querySelectorAll('.navlist li a').forEach(link => {
    link.classList.remove('active');
  });
  document.getElementById(activeId).classList.add('active');
}

// Event listeners
document.getElementById('nav-home').addEventListener('click', e => {
  e.preventDefault();
  showSection(sections.home);
  setActiveLink('nav-home');
});

document.getElementById('nav-about').addEventListener('click', e => {
  e.preventDefault();
  showSection(sections.about);
  setActiveLink('nav-about');
});

// Initial state
window.onload = () => {
  showSection(sections.home);
  setActiveLink('nav-home');
};
document.querySelectorAll('.navlist a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
      section.style.display = 'none';
    });

    // Remove 'active' from all navs
    document.querySelectorAll('.navlist a').forEach(nav => {
      nav.classList.remove('active');
    });

    // Show current section
    const targetId = this.id.replace('nav-', '') + '-section';
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = 'flex';
    }

    // Set active class
    this.classList.add('active');
  });
});

