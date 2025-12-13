const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  const btn = project.querySelector('.see-more');

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    projects.forEach(p => {
      if(p !== project) p.classList.remove('active');
    });

    project.classList.toggle('active');
  });
});


window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if(window.scrollY > 50){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById('toggle-projects');
  const hiddenProjects = document.querySelectorAll('.hidden-project');
  let expanded = false;

  button.addEventListener('click', () => {
    expanded = !expanded;

    hiddenProjects.forEach(project => {
      project.style.display = expanded ? 'block' : 'none';
    });

    button.textContent = expanded ? 'Ver menos' : 'Ver más';
  });
});
