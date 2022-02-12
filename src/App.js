import './App.css';
import TimeBatt from './components/TimeBatt';
import LogoBar from './components/LogoBar';
import MainLogin from './components/MainLogin';
import BottomBar from './components/BottomBar';


function App() {
  return (
    <div className="App">
      <TimeBatt />
      <LogoBar />
      <MainLogin />
      <BottomBar />
    </div>
  );
}

export default App;
