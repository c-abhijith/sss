import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={`${process.env.PUBLIC_URL}/logo.png`}  className="lal" alt="logo" />
        
    </div>
  );
}

export default App;
