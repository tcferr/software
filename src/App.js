import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import NewCompany from './components/pages/NewCompany'
import Email from './components/pages/Email'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">     
        <Routes>         
          <Route path="/" element={<Home />} />
          <Route  path="/company" element={<Company />} /> 
          <Route  path="/email" element={<Email />} />                   
          <Route  path="/newcompany" element={<NewCompany />} />                
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App;
