import React, {FC, FormEvent, useState} from "react";
import {useLoginStyles} from "./Styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {Backdrop, CircularProgress, Container, Link} from "@material-ui/core";
import {Link as RouterLink} from 'react-router-dom';
import {Alert} from '@material-ui/lab';
import {http} from "../../http";
import {API_BASE_URL} from "../../Constants";

type LoginPageProps = {}

type FormState = {
  email: string;
  password: string;
}

interface LoginResponse {
  status: boolean;
  token?: string;
  displayName?: string;
}


export const LoginPage: FC<LoginPageProps> = (props) => {
  const classes = useLoginStyles();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [form, setForm] = useState<FormState>({
    email: '',
    password: ''
  });

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await http<LoginResponse>(API_BASE_URL + "/auth/login", "POST",{
        "email": form.email,
        "password": form.password
      });
      console.log("Response ", response.parsedBody)
    } catch (ex) {
      setError(ex.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <form className={classes.form} noValidate={false} onSubmit={handleFormSubmit}>
            <Grid container spacing={0}>
              {error.length > 0 && <Grid item xs={12}><Alert severity="error">{error}</Alert></Grid>}

              <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={form.email}
                    onChange={(event => setForm({...form, email: event.target.value}))}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={form.password}
                    onChange={(event => setForm({...form, password: event.target.value}))}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember me"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleFormSubmit}
                >
                  Sign In
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs>
                    <Link component={RouterLink} to="/forget-password">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link component={RouterLink} to="/signup">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Backdrop
                className={classes.backdrop}
                open={loading}>
              <CircularProgress color="inherit"/>
            </Backdrop>

          </form>
        </div>
      </Container>
  )

};
