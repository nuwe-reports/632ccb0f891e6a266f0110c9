import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Grid, Typography, TextField, Button, Link, Alert } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import {startGoogleSignIn, startLoadingWithEmailPassword} from '../../store/auth/thunks'
import { useMemo } from "react";


const formData = {
  email:'',
  password:''
}
export const LoginPage = () => {
  const {status, errorMessage } = useSelector((state)=> state.auth )

  const dispatch = useDispatch();

  const {email, password, onInputChange} = useForm(
    formData
  );
  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoadingWithEmailPassword({email, password}))
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }
  return (
    <AuthLayout title="Login" >
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn' >
        <Grid container >
          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField
              label="Correo"
              type="email"
              placeholder="Introduce tu e-mail"
              fullWidth
              name='email'
              onChange={onInputChange}
              value={email}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Introduce tu contraseña"
              fullWidth
              name='password'
              onChange={onInputChange}
              value={password}
            />
          </Grid>

          <Grid item xs={12} sm={12} display={!!errorMessage ? '' : 'none'}>
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Button variant="contained" type="submit" disabled={isAuthenticating} fullWidth>
                Login
              </Button>
            </Grid>
          
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear Cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
