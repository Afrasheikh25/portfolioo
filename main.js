// Cache references to sections by ID
const sections = {
  home: document.getElementById('home-section'),
  about: document.getElementById('about-section'),
  work: document.getElementById('work-section'),
  project: document.getElementById('project-section'),
  contact: document.getElementById('contact-section'),
  certificate: document.getElementById('certificate-section')
};

// Function to show only the requested section
function showSection(sectionToShow) {
  Object.values(sections).forEach(sec => {
    sec.style.display = 'none';
  });
  sectionToShow.style.display = 'flex';
}

// Function to set active nav link
function setActiveLink(activeId) {
  document.querySelectorAll('.navlist li a').forEach(link => {
    link.classList.remove('active');
  });
  document.getElementById(activeId).classList.add('active');
}

// Setup event listeners for each nav item
Object.keys(sections).forEach(sectionKey => {
  const navId = `nav-${sectionKey}`;
  const section = sections[sectionKey];

  const navItem = document.getElementById(navId);
  if (navItem && section) {
    navItem.addEventListener('click', e => {
      e.preventDefault();
      showSection(section);
      setActiveLink(navId);
    });
  }
});

// Initial load: show home section
window.onload = () => {
  showSection(sections.home);
  setActiveLink('nav-home');
};

// ✅ Auto-fetch your GitHub projects
fetch('https://api.github.com/users/Afrasheikh25/repos')
  .then(response => response.json())
  .then(repos => {
    const projectList = document.querySelector('#project-section ul');

    // Remove manual projects (optional)
    projectList.innerHTML = '';

    // Display latest 5 projects
    repos.slice(0, 5).forEach(repo => {
      const li = document.createElement('li');
      li.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || 'No description provided'}</p>
        <a href="${repo.html_url}" target="_blank">
          <i class="fa-brands fa-github"></i> View on GitHub
        </a>`;
      projectList.appendChild(li);
    });
  })
  
  .catch(error => console.error('GitHub API error:', error));
