import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Portfolio from './Pages/Portfolio';
import Notfound from './Pages/Notfound';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './Components/Footer';
import Allstudent from './Pages/Allstudent';
function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
          <Route path="/"                   element={<Home />}     />
          <Route path="/about"              element={<About />}    />
          <Route path="/service"            element={<Service />}  />
          <Route path="/portfolio"           element={<Portfolio />} />
          <Route path="/contact"            element={<Contact />}  />
          <Route path="/allstudent"         element={<Allstudent/>}/>
          <Route path="/notfound"           element={<Notfound />} />
          <Route path="/*"                  element={<Notfound />} />
        </Routes>    
      <Footer />
    </div>
    </Router> 
  );
}
export default App;
