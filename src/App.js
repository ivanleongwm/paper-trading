import logo from './logo.svg';
import './App.css';
import JunkContent from './views/JunkContent';
import HeaderBar from './views/HeaderBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderBar />
        <p>Hello</p>
        <JunkContent />
      </header>
    </div>
  );
}

export default App;
