import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, Box } from '@material-ui/core'
import AxiosWithAuth from '../Utils/AxiosWithAuth';
import {Button} from '@material-ui/core'
import * as Yup from 'yup';
import { Link } from 'react-router-dom'
import {
    Formik
  } from 'formik';

const useStyles = makeStyles(theme => ({
    root: {
    flexGrow: 1,
  },
    box: {
      margin: theme.spacing(2)
          },
    TextField: {
        width:'96%',
        height:'100%',
      },
    TextFields: {
        width:'98%',
        height:'100%',
    },
    paper: {
    textAlign: 'center',
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
      },
    
  }));
  
  const theme = {
    spacing: value => value ** 2,
  }

  const Form = props =>  {
  const [values, setValues] = React.useState({
    first_name: null,
    last_name: null,
    phone: null,
    email: null,
    company: null,
    job: null,
    street: null,
    city: null,
    zip: null,
    state: null,
    country: null, 
    website: null,
  });
  
const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
};

const classes = useStyles();

const onSubmit = event => {
    event.preventDefault();

    Object.keys(values).forEach(property => {
        if (!values[property]) {
          delete values[property];
        }
      });
    AxiosWithAuth
      .post(
        "api/card/",
        values
      )
      .then(response => {
        console.log(response, props);
        // localStorage.setItem("token");
        props.history.push("/cardlist");
      })
      .catch(error => console.log("Creating A Card Error", error.response));
  };

    return (

    <Formik
    validationSchema={Yup.object().shape({
        first_name: Yup.string()
        .required('First Name is Required'),
        last_name: Yup.string()
        .required('Last Name is Required'),
        phone: Yup.string()
        .required('Phone Number is Required'),
        email: Yup.string()
        .required('Email is Required'),
        job: Yup.string()
        .required('Job is Required'),
        company: Yup.string()
        .required('Company Name is Required'),
  })}
  >
    <form onSubmit={onSubmit}>
      <div className={classes.root}>
        <Box 
        border={1} 
        borderRadius={6} 
        width={650} 
        p={2} 
        className={classes.box}>
            <Grid container spacing={2} className={classes.root} >
                <Grid  xs={6}>        
                    <TextField className={classes.TextField }
                      name="first_name"
                      label="First Name"
                      margin="normal"
                      variant="outlined"
                      value={values.firstname}
                      onChange={handleChange}
                      />
                </Grid>
                <Grid  xs={6}>
                    <TextField className={classes.TextField}
                      name="last_name"
                      label="Last Name"
                      margin="normal"
                      variant="outlined"
                      value ={values.lastname}
                      onChange={handleChange}
                    />
                </Grid>
                <Grid  xs={12}>
                    <TextField className={classes.TextFields}
                      name="phone"
                      label="Phone"
                      variant="outlined"
                      margin="normal"
                      value ={values.phone}
                      onChange={handleChange}
                      />
                </Grid>
               <Grid  xs={12}>
                    <TextField className={classes.TextFields}
                      name="email"
                      label="your@email.com"
                      variant="outlined"
                      margin="normal"
                      value ={values.email}
                      onChange={handleChange}
                      />
                </Grid>
                <Grid  xs={6}>
                    <TextField className={classes.TextField}
                      name="company"
                      label="Company"
                      margin="normal" 
                      variant="outlined"            
                      value ={values.company}
                      onChange={handleChange}
                      />                   
                </Grid>
                <Grid  xs={6}>
                    <TextField className={classes.TextField}
                      name="job"
                      label="Your Job"
                      margin="normal"
                      variant="outlined"
                      value ={values.job}
                      onChange={handleChange}
                    />
                </Grid>
                <Grid  xs={12}>
                    <TextField className={classes.TextFields}
                      name="street"
                      label="Street"
                      variant="outlined"
                      margin="normal"
                      value ={values.street}
                      onChange={handleChange}
                      />
                </Grid>
                <Grid  xs={6}>
                    <TextField className={classes.TextField}
                      name="city"
                      label="City"
                      variant="outlined"
                      margin="normal"
                      value ={values.city}
                      onChange={handleChange}
                      />
                </Grid>
                <Grid  xs={6}>
                    <TextField className={classes.TextField}
                      name="zip"
                      label="ZIP"
                      variant="outlined"
                      margin="normal"
                      value ={values.zip}
                      onChange={handleChange}
                    />
                </Grid>
                <Grid  xs={12}>
                    <TextField className={classes.TextFields}
                      name="state"
                      label="State"
                      variant="outlined"
                      margin="normal"
                      value ={values.state}
                      onChange={handleChange}
                      />
                </Grid>
                <Grid  xs={12}>
                    <TextField className={classes.TextFields}
                      name="country"
                      label="Country"
                      variant="outlined"
                      margin="normal"
                      value ={values.country}
                      onChange={handleChange}
                      />
                </Grid>
                <Grid  xs={12}>
                    <TextField className={classes.TextFields}
                      name="website"
                      label="Website"
                      variant="outlined"
                      margin="normal"
                      value ={values.website}
                      onChange={handleChange}
                      />
                </Grid>
            </Grid>
        </Box>
      </div>
      <Link to='/confirm'>
       <Button type='submit' variant="contained" color="secondary">
            Submit!
        </Button>
      </Link>
      </form>
      </Formik>
    );
  }

  export default Form
  