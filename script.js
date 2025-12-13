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

  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
  }
});

document.addEventListener('click', (e) => {
    if (!menu.classList.contains('active')) return;

    const clickDentroMenu = menu.contains(e.target);
    const clickEnBoton = toggle.contains(e.target);

    if (!clickDentroMenu && !clickEnBoton) {
      menu.classList.remove('active');
    }
  });

document.addEventListener('touchstart', (e) => {
  if (!menu.classList.contains('active')) return;

  const touchDentroMenu = menu.contains(e.target);
  const touchEnBoton = toggle.contains(e.target);

  if (!touchDentroMenu && !touchEnBoton) {
    menu.classList.remove('active');
  }
}, { passive: true });

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
