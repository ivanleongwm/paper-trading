import logo from './logo.svg';
import './App.css';
import JunkContent from './views/JunkContent';
import HeaderBar from './views/Header/HeaderBar';
import FooterBar from './views/FooterBar/FooterBar';
import Portfolio from './views/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderBar />
        <Portfolio />
        <FooterBar />
      </header>
    </div>
  );
}

export default App;

/*
<HeaderBar />
<Portfolio />
<FooterBar />
*/