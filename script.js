const projects = [
    { title: "Personal Portfolio", desc: "My first project! Built to learn HTML, CSS, and Bootstrap structure." },
    { title: "Python Bot (In Progress)", desc: "Currently learning Python automation to build useful tools." },
    { title: "JavaScript Basics", desc: "Practicing DOM manipulation and logic building through small web apps." }
];

const container = document.getElementById('project-container');

// Check karo ki container exist karta hai ya nahi
if (container) {
    projects.forEach(project => {
        container.innerHTML += `
            <div class="col-md-4">
                <div class="card h-100 p-4 border-0 shadow-sm">
                    <h5>${project.title}</h5>
                    <p class="text-muted">${project.desc}</p>
                </div>
            </div>
        `;
    });
}