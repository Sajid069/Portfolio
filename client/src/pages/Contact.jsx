function Contact() {
    return (
        // Main contact section container
        <section style={{
            padding: '40px',
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center',
            backgroundColor: '#f5f5f5'  // Light background to make it stand out
        }}>
            {/* Contact section heading */}
            <h2>Get In Touch</h2>

            {/* Contact description */}
            <p style={{ marginBottom: '30px' }}>
                I'm always open to discussing new opportunities, projects, or just having a chat about technology!
            </p>

            {/* Contact information container */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                {/* Email contact */}
                <a href="mailto:mdsajidhossainkhan2@gmail.com?subject=Hello Sajid&body=Hi Sajid, I found your portfolio and would like to connect!" style={{
                    color: '#333',
                    textDecoration: 'none',
                    padding: '10px 20px',
                    border: '2px solid #333',
                    borderRadius: '5px',
                    fontWeight: 'bold'
                }}>
                    📧 Email Me
                </a>

                {/* LinkedIn contact */}
                <a href="https://linkedin.com/in/md-sajid-hossain-khan/" target="_blank" style={{
                    color: '#0077b5',
                    textDecoration: 'none',
                    padding: '10px 20px',
                    border: '2px solid #0077b5',
                    borderRadius: '5px',
                    fontWeight: 'bold'
                }}>
                    💼 LinkedIn
                </a>

                {/* GitHub contact */}
                <a href="https://github.com/Sajid069" target="_blank" style={{
                    color: '#333',
                    textDecoration: 'none',
                    padding: '10px 20px',
                    border: '2px solid #333',
                    borderRadius: '5px',
                    fontWeight: 'bold'
                }}>
                    🐙 GitHub
                </a>


                {/* Phone number display - just text, not clickable */}
                <p style={{ marginTop: '20px', fontSize: '16px' }}>
                    📱 Phone: +8801985771527
                </p>
            </div>
        </section >
    );
}

// Export the Contact component
export default Contact;