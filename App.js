//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import DoctorRegister from './components/DoctorRegister';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div>
     <Header />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/doctorregister' element={<DoctorRegister />} />
     </Routes>
    </div>
  );
}

export default App;
