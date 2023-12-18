import './App.css';
import Button from './components/Button';
import ButtonClass from './components/ButtonClass';
import ImgComponent from './components/ImgComponent';

function App() {
  return (
    <div className="App">
      <Button label = "know 1" />
      <hr/>
      <ImgComponent />
      <hr/>
      <ButtonClass />
      
    </div>
  );
}

export default App;
