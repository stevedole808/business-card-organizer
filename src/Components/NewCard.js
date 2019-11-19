import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, Box, Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    width: '100',
    height:'150',
  },
  box: {
    margin: theme.spacing(4)
  },
  TextField: {
    width:'100%',
    height:'100%'
  }
}));

const Form = props =>  {
  const [values, setValues] = React.useState({
    firstname: '',
    lastname: '',
    mobile: '',
    phone: '',
    fax: '',
    email: '',
    company: '',
    job: '',
    street: '',
    city: '',
    zip: '',
    state: '',
    country: '', 
    website: '',
  });
  
  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
};

const classes = useStyles();

  return (
    <form className={classes.form} >
      <Box border={1} borderRadius={6} width={700} p={2} className={classes.box}>
          <Grid  
          container spacing={3}
          >
            <Grid item xs={12} sm={6}>
            <div>
            <TextField className={classes.TextField}
              name="firstname"
              label="First Name"
              margin="normal"
              variant="outlined"
              value={values.firstname}
              onChange={handleChange}
              />
            </div>
            </Grid>
          <Grid item xs={12} sm={6}>
            <div>
            <TextField className={classes.TextField}
              name="lastname"
              label="Last Name"
              margin="normal"
              variant="outlined"
              value ={values.lastname}
              onChange={handleChange}
            />
            </div>
            </Grid>
          <Grid item xs={12}>
            <div>
            <TextField className={classes.TextField}
              name="mobile"
              label="Mobile"
              fullWidth
              variant="outlined"
              value ={values.mobile}
              onChange={handleChange}
            />
            </div>
            </Grid>
          <Grid item xs={12} sm={6}>
            <div>
            <TextField className={classes.TextField}
              name="phone"
              label="Phone"
              variant="outlined"
              margin="normal"
              value ={values.phone}
              onChange={handleChange}
            />
            </div>
            </Grid>
          <Grid item xs={12} sm={6}>
            <div>
            <TextField className={classes.TextField}
              name="fax"
              label="Fax"              
              margin="normal"
              variant="outlined"
              value ={values.fax}
                                          
            />
            </div>
            </Grid>
          <Grid item xs={12}>
            <div>
            <TextField className={classes.TextField}
              name="your@email.com"
              label="your@email.com"
              fullWidth
              variant="outlined"
              value ={values.email}
              onChange={handleChange}
              />
            </div>
            </Grid>
          <Grid item xs={12} sm={6}>
            <div>
            <TextField className={classes.TextField}
              name="company"
              label="Company"
              margin="normal" 
              variant="outlined"            
              value ={values.company}
              onChange={handleChange}
            />
            </div>
            </Grid>
          <Grid item xs={12} sm={6}>
            <div>
            <TextField className={classes.TextField}
              name="job"
              label="Your Job"
              margin="normal"
              variant="outlined"
              value ={values.job}
              onChange={handleChange}
            />
            </div>
            </Grid>
          <Grid item xs={12}>
            <div>
            <TextField className={classes.TextField}
            name="street"
            label="Street"
            variant="outlined"
            fullWidth
            value ={values.street}
            onChange={handleChange}
          />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div>
            <TextField className={classes.TextField}
              name="city"
              label="City"
              variant="outlined"
              margin="normal"
              value ={values.city}
              onChange={handleChange}
            />
            </div>
            </Grid>
          <Grid item xs={12} sm={6}>
            <div>
            <TextField className={classes.TextField}
              name="zip"
              label="ZIP"
              variant="outlined"
              margin="normal"
              value ={values.zip}
              onChange={handleChange}
            />
            </div>
            </Grid>
          <Grid item xs={12}>
            <div>
            <TextField className={classes.TextField}
              name="state"
              label="State"
              variant="outlined"
              fullWidth
              value ={values.state}
              onChange={handleChange}
            />
            </div>
            </Grid>
          <Grid item xs={12}>
            <div>
            <TextField className={classes.TextField}
              name="country"
              label="Country"
              variant="outlined"
              fullWidth
              value ={values.country}
              onChange={handleChange}
            />
            </div>
            </Grid>
          <Grid item xs={12}>
            <div>
            <TextField className={classes.TextField}
              name="website"
              label="Website"
              variant="outlined"
              fullWidth
              value ={values.website}
              onChange={handleChange}
            />
            </div>
            </Grid>
          </Grid>
      </Box>
    </form>
  );
}

export default Form;
