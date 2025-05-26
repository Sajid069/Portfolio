function Projects() {
    // Array of project objects - each object contains info about one project
    const projects = [
      {
        title: "Human Resource Management System (HRMS)",
        tech: "React.js, CSS, JavaScript, Next.js",
        description: "Developed the front-end interface of a comprehensive HR management system with user-friendly design and responsive layouts.",
        github: "https://github.com/Sajid069/System Design"
      },
      {
        title: "Password Vault Manager", 
        tech: "Python",
        description: "Created a secure password management system with encryption for storing sensitive credentials.",
        github: "https://github.com/Sajid069/Password-Manager"
      },
      {
        title: "E-commerce App",
        tech: "Flutter", 
        description: "Developed a cross-platform e-commerce application with product browsing, cart management, and secure checkout.",
        github: "https://github.com/Sajid069/e-commerce"
      }
    ];
  
    return (
      // Main section container for projects
      <section style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        {/* Main heading for projects section */}
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>My Projects</h2>
        
        {/* Container for all project cards - uses CSS Grid for layout */}
        <div style={{ display: 'grid', gap: '30px' }}>
          {/* Loop through each project and create a card for it */}
          {projects.map((project, index) => (
            // Individual project card
            <div key={index} style={{ 
              border: '1px solid #ddd',     // Light gray border
              padding: '20px',              // Space inside the card
              borderRadius: '8px',          // Rounded corners
              backgroundColor: '#f9f9f9'    // Light gray background
            }}>
              {/* Project title */}
              <h3>{project.title}</h3>
              {/* Technologies used */}
              <p><strong>Technologies:</strong> {project.tech}</p>
              {/* Project description */}
              <p>{project.description}</p>
              {/* Link to GitHub repo - opens in new tab */}
              <a href={project.github} target="_blank" style={{ 
                color: '#0066cc',           // Blue color for link
                textDecoration: 'none',     // Remove underline
                fontWeight: 'bold'          // Make text bold
              }}>
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  // Export so we can use this component in other files
  export default Projects;