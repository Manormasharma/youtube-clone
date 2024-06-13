import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App font-semibold">
      <Header/>
      <Body />
    </div>
  );
}

export default App;
// State Lift Up 