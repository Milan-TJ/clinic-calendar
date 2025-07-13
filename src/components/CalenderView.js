import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import { Calendar, momentLocalizer } from 'react-big-calendar'
import './Calender.css'
import { useState } from "react";
import AppointmentForm from "./AppointmentForm";
import {
  Container,
  Paper
} from "@mui/material";

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Container maxWidth="sm" sx={{ minWidth: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '1rem' }}>
        <Paper elevation={6} sx={{ padding: 4, width: '100%' }}>
          <Calendar
            onClickDay={(date) => {
              setSelectedDate(date);
              setShowForm(true);
            }}
            value={selectedDate}
          />
          {showForm && (
            <AppointmentForm date={selectedDate} onClose={() => setShowForm(false)} />
          )}
        </Paper>
      </Container>
    </>
  );
};

export default CalendarView;
