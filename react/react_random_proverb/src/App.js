import logo from './logo.svg';
import './App.css';
import { getByAltText } from '@testing-library/react';




function App() {
  const proverbs = [ '좌절감으로 배움을 늦추지 마라','2', '4', '2', '23']
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <code>src/App.js</code> 명언.
        </p>
        { proverbs[getRandomIndex(proverbs.length)] }
      </header>
    </div>
  );
}

export default App;
