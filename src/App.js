
import './App.css';
import Eightcomponent from './components/Eightcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Firstcomponent from './components/Firstcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Secondcomponent from './components/Secondcomponent';
import Seventhcomponent from './components/Seventhcomponent';
import Sixthcomponent from './components/Sixthcomponent';
import Thirdcomponent from './components/Thirdcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          My React app
        </h1>
        <p>This is a simple paragraph</p>
        
      </header>
      <Firstcomponent/>   
      <Secondcomponent/>
      <Thirdcomponent/>
      <Fourthcomponent/>
      <Fifthcomponent/>
      <Sixthcomponent/>
      <Seventhcomponent/>
      <Eightcomponent/>
    </div>
  );
}

export default App;
