import React, {FC, FormEvent, useState} from "react";
import {useLoginStyles} from "./Styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {Backdrop, CircularProgress, Container, Link} from "@material-ui/core";
import {Link as RouterLink} from 'react-router-dom';
import {Alert} from '@material-ui/lab';
import {API_BASE_URL} from "../../Constants";
import {http} from "../../http";

type RegisterPageProps = {}


type FormState = {
  email: string;
  password: string;
  password2: string;
}

interface RegisterResponse {
  status: boolean
}

export const RegisterPage: FC<RegisterPageProps> = (props) => {
  const classes = useLoginStyles();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
    password2: "",
  });

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await http<RegisterResponse>(API_BASE_URL + "/auth/register", "POST", {
        "email": form.email,
        "password": form.password,
        "password2": form.password2
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
            Sign up
          </Typography>
          <form className={classes.form} noValidate={false} onSubmit={handleFormSubmit}>
            <Grid container spacing={3}>
              {error.length > 0 && <Grid item xs={12}><Alert severity="error">{error}</Alert></Grid>}

              <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(event => setForm({...form, email: event.target.value}))}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={form.password}
                    onChange={(event => setForm({...form, password: event.target.value}))}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password2"
                    label="Password Again"
                    type="password"
                    id="password2"
                    value={form.password2}
                    onChange={(event => setForm({...form, password2: event.target.value}))}
                />
              </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleFormSubmit}
            >
              Sign Up
            </Button>
            <Backdrop
                className={classes.backdrop}
                open={loading}>
              <CircularProgress color="inherit"/>
            </Backdrop>

            <Grid container justify="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
  )

};
