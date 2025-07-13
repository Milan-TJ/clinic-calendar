import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
import {
  TextField, Button, Container, Typography, Box,
  Paper
} from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "staff@clinic.com" && password === "123456") {
      localStorage.setItem("clinicUser", JSON.stringify({ email }));
      navigate("/calendar");
    } else {
      alert("Invalid credentials");
    }
  };

  return (

    <Container maxWidth="xs" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Paper elevation={6} sx={{ padding: 4, width: '100%' }}>
        <form onSubmit={handleLogin}>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              border: '2px solid #1976d2',
              padding: '8px 16px',
              borderRadius: '8px',
              display: 'inline-block',
              color: '#1976d2',
              width: '100%' 
            }}
          >
            Clinic Staff Login
          </Typography>
          <TextField
            label="Email"
            id="standard-basic" 
            variant="standard"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            id="standard-basic" 
            variant="standard"
            fullWidth
            margin="normal"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Box mt={3}>
            <Button variant="contained" color="primary" fullWidth type="submit">
              Login
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>);
};

export default Login;
