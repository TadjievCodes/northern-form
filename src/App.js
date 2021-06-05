import AlreadySubmitted from './components/AlreadySubmitted';
import Form from './components/Form';

// The logic here is if the localStorage has recentEmail data or returns true then show the AlreadySubmitted component else the form

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
