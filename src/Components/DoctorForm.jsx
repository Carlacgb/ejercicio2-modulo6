import React, { useState } from 'react';
import { addDoctor } from '../services/db';

const DoctorForm = ({ onDoctorAdded }) => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDoctor = { name, specialty };
    await addDoctor(newDoctor);
    onDoctorAdded();
    setName('');
    setSpecialty('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Especialidad"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
      />
      <button type="submit">Agregar Doctor</button>
    </form>
  );
};

export default DoctorForm;