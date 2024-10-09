import './App.css';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Home from './Components/home';
import Navigation from './Components/Navigation';
import ProjectPortfolio from './Components/project';
import Skills from './Components/Skill';

function App() {
  return (
    <div className="App">
       <Navigation/>
       <Home/>
       <Education/>
       <Skills/>
       <ProjectPortfolio/>
       <Contact/>
        
    </div>
  );
}

export default App;
