/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
} from '@mui/material';
import './Home.css';
import { useState } from 'react';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const irParaTeste = () => {
    navigate('/teste'); // Redireciona para a rota "/teste"
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Simulação de login (substitua por sua lógica real)
    if (email === 'admin@teste.com' && password === '123456') {
      alert('Login bem-sucedido!');
      navigate('/dashboard'); // Redireciona para outra página
    } else {
      alert('Credenciais inválidas!');
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          marginTop: 8,
          background: '#0097fc 51.77%',
        }}
      >
        <Typography variant="h5" align="center" gutterBottom color="white">
          Login
        </Typography>
        <Box
          component="form"
          //   onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            label="E-mail"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
                borderRadius: '10px',
              },
              borderRadius: '10px',
            }}
            slotProps={{
              inputLabel: {
                sx: {
                  color: 'white', // Cor padrão do label
                  '&.Mui-focused': {
                    color: 'white', // Cor do label quando o campo está em foco
                  },
                },
              },
            }}
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
                borderRadius: '10px',
              },
              borderRadius: '10px',
            }}
            slotProps={{
              inputLabel: {
                sx: {
                  color: 'white', // Cor padrão do label
                  '&.Mui-focused': {
                    color: 'white', // Cor do label quando o campo está em foco
                  },
                },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={irParaTeste}
          >
            Entrar
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Home;
