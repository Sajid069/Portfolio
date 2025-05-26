// Import our components
import Header from './components/Header'
import About from './pages/About'
import Projects from './pages/Projects'  // Add this new import
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      {/* Header appears at the top of every page */}
      <Header />
      
      {/* Main content area */}
      <main>
        {/* Welcome section */}
        <div style={{ padding: '40px', textAlign: 'center' }}>
          <h2>Welcome to my portfolio!</h2>
          <p>Showcasing my journey as a developer</p>
        </div>
        
        {/* About section */}
        <About />
        
        {/* Projects section - NEW! */}
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

// Export the main App component
export default App