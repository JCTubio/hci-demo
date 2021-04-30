import logo from './logo.svg';
import './App.scss';

import SideBar from './components/SideBar'

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="main">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the home page for our <i>future</i> healthy app
        </p>
        <p>
          Coming soon.
        </p>
      </div>
    </div>
  );
}

export default App;
