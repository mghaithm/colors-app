import seedColors from './seedColors';
import Palette from './Palette';
import './App.css';

function App() {
  return (
    <div className="App">
     <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
