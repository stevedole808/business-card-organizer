import React from "react";
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

export default function Login () {
    const [values, setValues] = React.useState({
      username: '',
      email: '',
      password: '',
      showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
    event.preventDefault();
    };

    const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
        },
        margin: {
          margin: theme.spacing(1),
        },
        withoutLabel: {
          marginTop: theme.spacing(3),
        },
        textField: {
          width: 200,
        },
    }));

    const classes = useStyles();

    return (
        <>
        <Paper component="form" className={classes.root}>
            <div className='paper'>
            <form>
                <FormControl className={classes.margin}>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                id="username"
                type='text'
                value={values.username}
                startAdornment={
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                }
                />
                </FormControl>

                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                    id="email"
                    type='email'
                    value={values.email}
                    startAdornment={
                        <InputAdornment position="start">
                        <EmailIcon />
                        </InputAdornment>
                    }
                    />
                </FormControl>

                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        id="password"
                        type='password'
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
            </form>
            <Box className='buttons'>
            <Button variant="contained" color="primary" className={classes.button} >
                Register
            </Button>{' '}
            <Button color="primary" className={classes.button} >
                Log In
            </Button>
            </Box>
            </div>
        </Paper>
        </>
    )
}