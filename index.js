let currentProjectIndex = 0;
const projects = document.querySelectorAll('.carousel .project');

function showProject(index) {
    const projectWidth = document.querySelector('.project').offsetWidth;
    const newTransformValue = -index * projectWidth;
    document.querySelector('.projects-container').style.transform = `translateX(${newTransformValue}px)`;
    
    // Manage the opacity and other styles of projects
    projects.forEach((project, idx) => {
        if (idx === index) {
            project.classList.add('active');
        } else {
            project.classList.remove('active');
        }
    });
}

function nextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    showProject(currentProjectIndex);
}

function prevProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    showProject(currentProjectIndex);
}

// Initially show the first project
showProject(currentProjectIndex);

// Set interval to change project every 30 seconds
setInterval(nextProject, 30000);

// Button event listeners
document.getElementById('nextButton').addEventListener('click', nextProject);
document.getElementById('prevButton').addEventListener('click', prevProject);

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navUL = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navUL.classList.toggle('active');
    });
});