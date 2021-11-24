import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import {Dialog,DialogTitle, DialogContentText,DialogActions,DialogContent} from '@mui/material';
import Error from '../components/error';
import {signup} from '../Api/authApi';
import {Link} from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp(props) {

  const [acount,setAcount]=React.useState({open:false,message:''})

  const [error,setError]=React.useState('');

  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
     const user={
      firstName:data.get('firstName'),
      lastName:data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    };

//     if(user.firstName === ''){
//       setError('Enter First Name'); return;
//     }

//          if(user.lastName === ''){
//                     setError('Enter Last Name');
//                 return;
// }
 
//          if(user.email === ''){
//                   setError('Enter Email');
//                 return;
// }

//  const emailPattern = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
//           if(!emailPattern.test(user.email)){
//                   setError('Invalid Email Address'); return;
// }
//          if(user.password === ''){
//                   setError('Enter Password');
//                 return;
// }
// const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,12})");
//          if(!strongRegex.test(user.password)){
//                   setError("Your Password is too weak.Enter at least 1 capital and small alphabet and 1 num               ber")
// }
//          if(user.password.length > 12){
//                   setError('your password must be  8 to 12 charctor');
//                  return;
//   }
//          if(user.password.length < 8){
//                 setError('your password must be  8 to 12 charctor');
//                return;
// }

 
    signup(user).then((res)=>{
        if(res.error){
          console.log(res);
          setError(res.error);
        }else{
          console.log(res.message);
          setAcount({open:true,message:res.message});
        }
    })
};
// console.log('account',account)
  return (
    <div style={{marginTop:'100px'}}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
     
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {error===""?null:<Error>{error}</Error>}
            <Grid style={{marginTop:10}} container spacing={2}>
              <Grid item xs={12} sm={6}>
             
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required={true}
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
                  autoComplete="lname"
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
             
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
         
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={'/signin'}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>


    <Dialog open={acount.open}>
        <DialogTitle>New Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {acount.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to={"/signin"}>
            <Button color="primary" autoFocus="autoFocus" variant="raised">
              Sign In
            </Button>
          </Link>
        </DialogActions>
      </Dialog>



    </div>
  );
}