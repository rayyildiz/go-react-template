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

type ForgetPasswordPageProps = {}

interface ForgetPasswordResponse {
  token: string;
}

export const ForgetPasswordPage: FC<ForgetPasswordPageProps> = (props) => {
  const classes = useLoginStyles();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [email, setEmail] = useState<string>('');

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await http<ForgetPasswordResponse>(API_BASE_URL + "/auth/reminder", "POST", {
        "email": email,
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
            Reset Password
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
                    value={email}
                    onChange={event => setEmail(event.target.value)}
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
                  Reset Password
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link component={RouterLink} to="/login" variant="body2">
                      Already have an account? Sign in
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
