import './App.css';
import Search from './Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-heading--1'>Weather App</h1>
      </header>
      <Search />
      <Footer />
    </div>
  );
}

export default App;
