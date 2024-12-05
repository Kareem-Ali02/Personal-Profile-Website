// Project data
const projects = [
    {
        id: 1,
        title: "E-Commerce Product Page",
        description: "A full-featured e-commerce Product Page built with vanilla JavaScript. With responsive design.",
        image: "Assets/image-1.PNG",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        liveUrl: "https://your-live-url.com",
        githubUrl: "https://github.com"
    },
    {
        id: 2,
        title: "Recipe Finder Application",
        description: "Explore delicious possibilities with our Recipe Finder – your go-to platform for discovering and customizing recipes to match your taste!",
        image: "Assets/image-2.PNG",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        liveUrl: "https://your-live-url.com",
        githubUrl: "https://github.com"
    },
    /*{
        //id: 3,
        title: "Task Manager",
        description: "A feature-rich task management application with drag-and-drop functionality, local storage persistence, and category organization.",
        image: "https://via.placeholder.com/600x400",
        technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
        liveUrl: "https://your-live-url.com/task-manager",
        githubUrl: "https://github.com/yourusername/task-manager"
    }*/
];

// Skills data
const skills = [
    { name: 'HTML5', icon: 'fa-html5' },
    { name: 'CSS3', icon: 'fa-css3-alt' },
    { name: 'JavaScript', icon: 'fa-js' },
    { name: 'Git', icon: 'fa-git-alt' },
    { name: 'Responsive Design', icon: 'fa-mobile-alt' },
    { name: 'Web Design', icon: 'fa-palette' }
];

// Create project card HTML
function createProjectCard(project) {
    return `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveUrl}" target="_blank" class="btn-primary">Live Demo</a>
                    <a href="${project.githubUrl}" target="_blank" class="btn-secondary">
                        <i class="fab fa-github"></i> View Code
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Initialize skills section
function initializeSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    skillsGrid.innerHTML = skills.map(skill => `
        <div class="skill-card">
            <i class="fab ${skill.icon}"></i>
            <span>${skill.name}</span>
        </div>
    `).join('');
}

// Initialize portfolio section
function initializePortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    portfolioGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
}

// Theme toggle functionality
function initializeThemeToggle() {
    const theme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', theme);

    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Contact form handling
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        console.log('Form submitted:', data);
        contactForm.reset();
        alert('Message sent successfully!');
    });
}

// Smooth scrolling
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeSkills();
    initializePortfolio();
    initializeThemeToggle();
    initializeContactForm();
    initializeSmoothScroll();
});