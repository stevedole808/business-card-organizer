import React from "react";
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
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
                <TextField
                    id="username"
                    label="Username"
                    className={`${classes.textField} input`}
                    margin="normal"
                    variant="outlined"
                    value={values.username}
                />
            
                <TextField
                    id="email"
                    label="Email"
                    type='email'
                    className={`${classes.textField} input`}
                    margin="normal"
                    variant="outlined"
                    value={values.email}
                />

                <TextField
                    id="password"
                    label="Password"
                    className={`${classes.textField} input`}
                    type="password"
                    margin="normal"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange('password')}
                />
            </form>

            <Box className='buttons'>
            <Button variant="contained" color="primary" className={classes.button} >
                Register
            </Button>
            <Button color="primary" className={classes.button} >
                Log In
            </Button>
            </Box>
            </div>
        </Paper>
        </>
    )
}