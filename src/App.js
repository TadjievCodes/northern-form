import AlreadySubmitted from './components/AlreadySubmitted';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      { localStorage.getItem('recentEmail') ? (
        <AlreadySubmitted />) :  
      (<Form />)
    }
    </div>
  );
}

export default App;
