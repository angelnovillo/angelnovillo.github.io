// Toggle menú
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// SPA: Mostrar solo un proyecto a la vez
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

