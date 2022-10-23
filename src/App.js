import './App.css';
import Courses from './components/Courses';
import Events from './components/Events';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';




function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Courses></Courses>
      <Events></Events>
      <Footer></Footer>
    </div>
  );
}

export default App;
