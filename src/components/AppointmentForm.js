import { useState } from "react";
import { patients, doctors } from "../data/mockData";
import { saveAppointment } from "../utils/storage";
import './AppointmentForm.css'; 

const AppointmentForm = ({ date, onClose }) => {
  const [patient, setPatient] = useState(patients[0]);
  const [doctor, setDoctor] = useState(doctors[0]);
  const [time, setTime] = useState("09:00");

  const handleSubmit = (e) => {
    e.preventDefault();
    saveAppointment(date, { patient, doctor, time });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <h3>Appointment on {date.toDateString()}</h3>

          <label>Patient</label>
          <select value={patient} onChange={(e) => setPatient(e.target.value)}>
            {patients.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>

          <label>Doctor</label>
          <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
            {doctors.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>

          <label>Time</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />

          <div className="button-group">
            <button type="submit" className="btn-primary">Save</button>
            <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
