import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Container from './components/layout/Container.js'
import Home from './components/pages/Home.js'
import Contact from './components/pages/Contact.js'
import Company from './components/pages/Company.js'
import NewProject from './components/pages/NewProject.js'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="Company">Empresa</Link>
        <Link to="Contact">Contato</Link>
        <Link to="NewProject">Novo Projeto</Link>
      </div>

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
