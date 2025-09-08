const roles = ["AIML Enthusiast", "Full stack developer", "AI Engineer"];
let roleIndex = 0;
const roleElement = document.getElementById("animated-roles");

function changeRole() {
  roleElement.textContent = roles[roleIndex];
  roleIndex = (roleIndex + 1) % roles.length;
}
changeRole();
setInterval(changeRole, 2500); // every 2.5s
const sections = {
  home: document.getElementById('home-section'),
  about: document.getElementById('about-section'),
  work: document.getElementById('work-section'),
  project: document.getElementById('project-section'),
  contact: document.getElementById('contact-section'),
  certificate: document.getElementById('certificate-section'),
  skill: document.getElementById('skill-section')  // ✅ Fixed with comma
};

function showSection(sectionToShow) {
  Object.values(sections).forEach(sec => {
    sec.style.display = 'none';
  });
  sectionToShow.style.display = 'flex';
}

function setActiveLink(activeId) {
  document.querySelectorAll('.navlist li a').forEach(link => {
    link.classList.remove('active');
  });
  document.getElementById(activeId).classList.add('active');
}

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

window.onload = () => {
  showSection(sections.home);
  setActiveLink('nav-home');
};

fetch('https://api.github.com/users/Afrasheikh25/repos')
  .then(response => response.json())
  .then(repos => {
    const projectList = document.querySelector('#project-section ul');
    projectList.innerHTML = '';
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

document.getElementById('hire-me-btn').addEventListener('click', e => {
  e.preventDefault();
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById('contact-section').style.display = 'flex';
  setActiveLink('nav-contact');
});

document.getElementById('view-project-btn').addEventListener('click', e => {
  e.preventDefault();
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById('project-section').style.display = 'flex';
  setActiveLink('nav-project');
});
const hamburger = document.getElementById('hamburger-menu');
const navlist = document.getElementById('navlist');

hamburger.addEventListener('click', () => {
  navlist.classList.toggle('open');
  hamburger.classList.toggle('active');
  document.body.classList.toggle('nav-open');
});

// Close menu on tab click for better UX
document.querySelectorAll('#navlist li a').forEach(link => {
  link.addEventListener('click', () => {
    navlist.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.classList.remove('nav-open');
  });
});
