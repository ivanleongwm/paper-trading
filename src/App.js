import logo from './logo.svg';
import './App.css';
import JunkContent from './views/JunkContent';
import HeaderBar from './views/HeaderBar';
import FooterBar from './views/FooterBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderBar />
        <p>Hello</p>
        <JunkContent />
        <FooterBar />
      </header>
    </div>
  );
}

export default App;
