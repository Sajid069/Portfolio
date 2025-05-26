function Header() {
    return (
      <header style={{ padding: '20px', backgroundColor: '#333', color: 'white' }}>
        <h1>Sajid's Portfolio</h1>
        <nav>
          <a href="#about" style={{ color: 'white', margin: '0 15px' }}>About</a>
          <a href="#projects" style={{ color: 'white', margin: '0 15px' }}>Projects</a>
          <a href="#contact" style={{ color: 'white', margin: '0 15px' }}>Contact</a>
        </nav>
      </header>
    );
  }
  
  export default Header;