export function saveAppointment(date, appointment) {
  const key = date.toDateString();
  const existing = JSON.parse(localStorage.getItem("appointments") || "{}");
  if (!existing[key]) existing[key] = [];
  existing[key].push(appointment);
  localStorage.setItem("appointments", JSON.stringify(existing));
}

export function getAppointments() {
  return JSON.parse(localStorage.getItem("appointments") || "{}");
}
