import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { About } from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Home />
     <Projects />
     <About />
     <Contact />
    
    </div>
  );
}

export default App;  
