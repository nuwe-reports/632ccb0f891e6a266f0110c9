import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";

const formData = {
  email:'',
  displayName:'',
  password:''
}
export const RegisterPage = () => {
  const { formState, displayName, email, password, onInputChange,displayNameValid, emailValid, passwordValid, isFormValid } = useForm(formData, formValidation)
  return (
    <AuthLayout title="Register">
        <form>
            <Grid container>
                <Grid item xs={12} sx={{mt:2}}>
                    <TextField
                      label='Nombre completo'
                      type='text'
                      placeholder='Nombre'
                      fullWidth
                      name="displayName"
                      value={displayName}
                      onChange={onInputChange}
                    />
                </Grid>
                <Grid item xs={12} sx={{mt:2}}>
                    <TextField
                      label='Email'
                      type='email'
                      placeholder='Email'
                      fullWidth
                      name="email"
                      value={email}
                      onChange={onInputChange}
                    />
                </Grid>
                <Grid item xs={12} sx={{mt:2}}>
                    <TextField
                      label='Contraseña'
                      type='password'
                      placeholder='Contraseña'
                      fullWidth
                      name="password"
                      value={password}
                      onChange={onInputChange}
                    />
                </Grid>
                <Grid container spacing={2} sx={{mb:2, mt:1}}>
                  <Grid item cs={12}>
                      <Button variant="contained" fullWidth>
                        Crear cuenta
                      </Button>
                  </Grid> 
                </Grid>
                
                <Grid container direction='row' justifyContent='end' >
                  <Typography sx={{mr:1}} >¿Ya tienes cuenta?</Typography>
                  <Link component={RouterLink} color='inherit' to='/auth/login'>Ir al Login</Link>
                </Grid>
                </Grid>
        </form>
    </AuthLayout>
  )
}
