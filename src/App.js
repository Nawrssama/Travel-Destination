import './App.css';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import TourDetails from './components/TourDetails/TourDetails'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path="/city/:id" element={<TourDetails />} />
        
      </Routes>


    </div>
  );
}

export default App;
