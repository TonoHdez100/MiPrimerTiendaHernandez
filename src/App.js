import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar"
import CartComponent from './Components/CartComponent';
import ItemCount from './Components/ItemCount';


function App() {
  return (
    <div className="container">
      <br />
      <NavBar />
      <CartComponent />
    </div>
  );
}

export default App;
