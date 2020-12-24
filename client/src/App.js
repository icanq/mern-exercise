import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/navbar.component'

function App() {
  return (
    <Router>
      <Navbar />
      <br />
    </Router>
  );
}

export default App;
