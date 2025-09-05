
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Firstcomponent from './components/Firstcomponent';
import Eightcomponent from './components/Eightcomponent';
import Fifthcomponent from './components/Fifthcomponent';

import Fourthcomponent from './components/Fourthcomponent';
import Secondcomponent from './components/Secondcomponent';
import Seventhcomponent from './components/Seventhcomponent';
import Sixthcomponent from './components/Sixthcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Ninthcomponent from './components/Ninthcomponent';
import Notfound from './components/Notfound';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1>
          My First React app
        </h1>
       
        
      </header>
      <Link to={"/"} className='links'>First</Link>
  
      <Link to={"/second"} className='links' >second</Link>
      <Link to={"/Third"} className='links'>Third</Link>
      <Link to={"/Fourth"} className='links'>Fourth</Link>
      <Link to={"/Fifth"} className='links'>Fifth</Link>
      <Link to={"/Sixth"} className='links'>Sixth</Link>
      <Link to={"/Seventh"} className='links'>Seventh</Link>
      <Link to={"/Eight"} className='links'>Eight</Link>
      <Link to={"/Ninth"} className='links'>Ninth</Link>
      <Routes>
        <Route path="/" element={ <Firstcomponent/>}/>
        <Route path="/second" element={<Secondcomponent/>}/>
        <Route path="/Third" element={<Thirdcomponent/>}/>
        <Route path="/Fourth" element={<Fourthcomponent/>}/>
        <Route path ="/Fifth" element={<Fifthcomponent/>}/>
        <Route path="/sixth" element={<Sixthcomponent/>}/>
        <Route path='/seventh' element={<Seventhcomponent/>}/>
        <Route path='/Eight' element={<Eightcomponent/>}/>
        <Route path='/Ninth' element={<Ninthcomponent/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
