import './App.css';
import JunkContent from './views/JunkContent';
import HeaderBar from './views/Header/HeaderBar';
import FooterBar from './views/FooterBar/FooterBar';
import Portfolio from './views/Portfolio/Portfolio';
import RegisterForm from './views/Forms/RegisterForm/RegisterForm'
import LoginForm from './views/Forms/LoginForm/LoginForm'
import FormDataDisplay from './views/Forms/FormDataDisplay/FormDataDisplay';
import Buy from './views/Buy/Buy'
import Sell from './views/Sell/Sell'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <HeaderBar />
          <Routes>
            <Route path="/" element={<Portfolio />}/>
            <Route path="/buy" element={<Buy />}/>
            <Route path="/sell" element={<Sell />}/>
            <Route path="/register" element={<RegisterForm/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/display" element={<FormDataDisplay/>}/>
          </Routes>
          <FooterBar />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;

/*
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import RandomCardPage from './pages/RandomCardPage'

function App() {
  const [count, setCount] = useState(0)
  //React router, if you go to that page then that element shows up, it you don't go to that path then it doesn't show up
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/magic-the-gathering-react-api" element={<MainPage />}/>
        <Route path="/home" element={<MainPage />}/>
        <Route path="/card" element={<RandomCardPage />}/>
        <Route path="/card/:id" element={<RandomCardPage />}/>
      </Routes>
    </BrowserRouter>
  )
}
*/