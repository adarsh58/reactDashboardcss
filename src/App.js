import logo from './logo.svg';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import MainDash from './Components/MainDash/MainDash';
import RightSide from './Components/RightSide/RightSide';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
      <SideBar/>
      <MainDash/>
      <RightSide/>

      </div>
    </div>
  );
}

export default App;
