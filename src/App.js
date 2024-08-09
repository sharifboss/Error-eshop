import logo from './logo.svg';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
