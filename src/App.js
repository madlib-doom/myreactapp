
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
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
    </div>
  );
}

export default App;
