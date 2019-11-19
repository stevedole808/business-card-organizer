import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const Register = props => {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column"
    },
    margin: {
      margin: theme.spacing(1)
    },
    withoutLabel: {
      marginTop: theme.spacing(3)
    },
    textField: {
      width: 375
    }
  }));

  const classes = useStyles();

  // On submit to POST user to api //
  const onSubmit = event => {
    event.preventDefault();

    axios
      .post(
        "https://businesscardorganizer.herokuapp.com/api/auth/register",
        values
      )
      .then(response => {
        console.log(response, props);
        // localStorage.setItem("token");
        props.history.push("/login");

      })
      .catch(error => console.log("Login Error", error.response));
  };

  return (
    <>
      <Paper component="div" className={classes.root}>
        <div className="paper-container">
          <form onSubmit={onSubmit}>
            <TextField
              name="username"
              label="Username"
              className={`${classes.textField} input`}
              margin="normal"
              variant="outlined"
              value={values.username}
              onChange={handleChange}
            />

            <TextField
              name="email"
              label="Email"
              type="email"
              className={`${classes.textField} input`}
              margin="normal"
              variant="outlined"
              value={values.email}
              onChange={handleChange}
            />

            <TextField
              name="password"
              label="Password"
              className={`${classes.textField} input`}
              type="password"
              margin="normal"
              variant="outlined"
              value={values.password}
              onChange={handleChange}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Register
            </Button>
          </form>

          <div className="login">
            <Typography variant="subtitle2" component="p">
              Already signed up?
            </Typography>
            <Link to="/login">
              <Button
                color="primary"
                className={classes.button}
                onClick={() => console.log("clicked")}
              >
                Log In
              </Button>
            </Link>

          </div>
        </div>
      </Paper>
    </>
  );
};
export default Register;
