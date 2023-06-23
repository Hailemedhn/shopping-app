import './App.css';
import Header from "./component/Header";
import Middle from "./component/Middle";

function App() {
  return (
    <div className="App">
      <div className="top">
        <Header />
     </div>
     <div className='bottom'>
      <Middle />
     </div>
    </div>
  );
}

export default App;
