import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/views/Home';
import EquipoMedico from './components/views/EquipoMedico';
import Citas from './components/views/Citas';
import Navbar from './components/Navbar';
import DoctorForm from './Components/DoctorForm';

localStorage.setItem("usuario", "Carla Pérez");

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/equipo-medico" element={<EquipoMedico />} />
                <Route path="/citas" element={<Citas />} />
                <Route path="/Agregar-doctor" element={<DoctorForm/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
