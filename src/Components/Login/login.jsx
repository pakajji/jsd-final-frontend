import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("data", data);
    const jsonData = {
        email: data.get('email'),
        password: data.get('password')
    }
    fetch('https://pk-be-4p2l.vercel.app/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData),
  })
// console.log(jsonData);
//   await axios.post('https://pk-be-4p2l.vercel.app/login', jsonData, {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
  .then((response) => response.json())
  .then((data) => {
    if (data.status === 'ok'){
        localStorage.setItem('token',data.token)
        window.location = '/overview'
    } else {
        alert('login failed')
    }
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};

  return (
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs" sx={{ height: '100vh',display: 'flex',alignItems: 'center' }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mt: 10 }}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ py: 1.5, mt: 3, mb: 2 , borderRadius: 5 , backgroundColor:"#86e3ce", "&:hover": {background: "#50b39c"}, fontSize: 16}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}