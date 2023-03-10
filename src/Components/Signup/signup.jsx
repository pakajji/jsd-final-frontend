import * as React from 'react';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import axios from 'axios';
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
        email: data.get('email'),
        password: data.get('password'),
        fname: data.get('firstName'),
        lname: data.get('lastName')
    }

      fetch('https://pk-be-4p2l.vercel.app/register', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonData),
  })
  // axios.post('https://pk-be-4p2l.vercel.app/register', JSON.stringify(jsonData), {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  .then((response) => {
    response.json()
    alert('register success')
    window.location = '/login'
})
  .catch((error) => {
    console.error('Error:', error);
  });
  };

  
  return (
    // <ThemeProvider theme={theme}>
    //   <Container component="main" maxWidth="xs" sx={{ height: '100vh', display: 'flex',alignItems: 'center' }}>
    //     <CssBaseline />
    //     <Box
    //       sx={{
    //         marginTop: 0,
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center'
    //       }}
    //     >
    //       <Typography component="h1" variant="h5" sx={{ mt: 10 }}>
    //         Sign up
    //       </Typography>
    //       <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
    //         <Grid container spacing={2}>
    //           <Grid item xs={12} sm={6}>
    //             <TextField
    //               autoComplete="given-name"
    //               name="firstName"
    //               required
    //               fullWidth
    //               id="firstName"
    //               label="First Name"
    //               autoFocus
    //             />
    //           </Grid>
    //           <Grid item xs={12} sm={6}>
    //             <TextField
    //               required
    //               fullWidth
    //               id="lastName"
    //               label="Last Name"
    //               name="lastName"
    //               autoComplete="family-name"
    //             />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <TextField
    //               required
    //               fullWidth
    //               id="email"
    //               label="Email Address"
    //               name="email"
    //               autoComplete="email"
    //             />
    //           </Grid>
    //           <Grid item xs={12}>
    //             <TextField
    //               required
    //               fullWidth
    //               name="password"
    //               label="Password"
    //               type="password"
    //               id="password"
    //               autoComplete="new-password"
    //             />
    //           </Grid>
    //           <Grid item xs={12}>
    //           </Grid>
    //         </Grid>
    //         <Button
    //           type="submit"
    //           fullWidth
    //           variant="contained"
    //           sx={{ py: 1.5, mt: 3, mb: 2 , borderRadius: 5 , backgroundColor:"#86e3ce", "&:hover": {background: "#50b39c"}, fontSize: 16 }}
    //         >
    //           Sign Up
    //         </Button>
    //         <Grid container justifyContent="flex-end">
    //           <Grid item>
    //             <Link href="/login" variant="body2">
    //               Already have an account? Sign in
    //             </Link>
    //           </Grid>
    //         </Grid>
    //       </Box>
    //     </Box>
    //   </Container>
    // </ThemeProvider>

    <ThemeProvider theme={theme}>
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sign in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form
            className={styles.form_container}
            onSubmit={handleSubmit}>
            <h1>Create Account</h1>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="given-name"
                          name="firstName"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="family-name"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                        />
                      </Grid>
                    </Grid>
            {/*error && <div className={styles.error_msg}>{error}</div>*/}
            <button type="submit" className={styles.green_btn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}