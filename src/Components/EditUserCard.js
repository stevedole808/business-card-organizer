import React, { useState } from "react";
import AxiosWithAuth from "../Utils/AxiosWithAuth";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid, Box, Button } from "@material-ui/core";

const color = {
  backgroundColor: "#909090"
};

const initialUser = {
  first_name: null,
  last_name: null,
  phone: null,
  email: null,
  company: null,
  job: null,
  street: null,
  city: null,
  zip: null,
  state: null,
  country: null,
  website: null
};

const EditUserCard = props => {
  const [editing, setEditing] = useState(false);
  const [userToEdit, setUserToEdit] = useState(initialUser);
  const useStyles = makeStyles();
  //   const editUser = user => {
  //   setEditing(true);
  //     setUserToEdit(user);
  //   };

  const saveEdit = e => {
    e.preventDefault();
    Object.keys(userToEdit).forEach(property => {
      if (!userToEdit[property]) {
        delete userToEdit[property];
      }
    });
    console.log(userToEdit);
    AxiosWithAuth()
      .put(`api/cards/${props.match.params.id}`, userToEdit)
      .then(response => {
        console.log("put res data", response.data);
        props.history.push("/protected");
      });
  };
  const handleChange = event => {
    setUserToEdit({ ...userToEdit, [event.target.name]: event.target.value });
  };
  console.log("params", props.match.params.id);
  const classes = useStyles();

  return (
    <form>
      <div className={classes.root}>
        <Box
          border={1}
          borderRadius={6}
          width={500}
          p={2}
          className={classes.box}
        >
          <Grid container spacing={1} className={classes.root}>
            <Grid item xs={6}>
              <div className={classes.paper}>
                <TextField
                  className={classes.TextField}
                  name="first_name"
                  label="First Name"
                  margin="normal"
                  variant="outlined"
                  value={userToEdit.firstname}
                  onChange={handleChange}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.paper}>
                <TextField
                  className={classes.TextField}
                  name="last_name"
                  label="Last Name"
                  margin="normal"
                  variant="outlined"
                  value={userToEdit.lastname}
                  onChange={handleChange}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.paper}>
                <TextField
                  className={classes.TextField}
                  name="phone"
                  label="Phone"
                  variant="outlined"
                  margin="normal"
                  value={userToEdit.phone}
                  onChange={handleChange}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.paper}>
                <TextField
                  className={classes.TextField}
                  name="email"
                  label="your@email.com"
                  fullWidth
                  variant="outlined"
                  value={userToEdit.email}
                  onChange={handleChange}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.paper}>
                <TextField
                  className={classes.TextField}
                  name="company"
                  label="Company"
                  margin="normal"
                  variant="outlined"
                  value={userToEdit.company}
                  onChange={handleChange}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.paper}>
                <TextField
                  className={classes.TextField}
                  name="job"
                  label="Your Job"
                  margin="normal"
                  variant="outlined"
                  value={userToEdit.job}
                  onChange={handleChange}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.paper}>
                <TextField
                  className={classes.TextField}
                  name="street"
                  label="Street"
                  margin="normal"
                  variant="outlined"
                  value={userToEdit.street}
                  onChange={handleChange}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.paper}>
                <TextField
                  className={classes.TextField}
                  name="city"
                  label="City"
                  variant="outlined"
                  margin="normal"
                  value={userToEdit.city}
                  onChange={handleChange}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.paper}>
                <TextField
                  className={classes.TextField}
                  name="zip"
                  label="ZIP"
                  variant="outlined"
                  margin="normal"
                  value={userToEdit.zip}
                  onChange={handleChange}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.paper}>
                <TextField
                  className={classes.TextField}
                  name="state"
                  label="State"
                  variant="outlined"
                  fullWidth
                  value={userToEdit.state}
                  onChange={handleChange}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.paper}>
                <TextField
                  className={classes.TextField}
                  name="country"
                  label="Country"
                  variant="outlined"
                  fullWidth
                  value={userToEdit.country}
                  onChange={handleChange}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.paper}>
                <TextField
                  className={classes.TextField}
                  name="website"
                  label="Website"
                  variant="outlined"
                  fullWidth
                  value={userToEdit.website}
                  onChange={handleChange}
                />
              </div>
            </Grid>
          </Grid>
          <Button onClick={saveEdit} variant="contained" color="secondary">
            Save
          </Button>
        </Box>
      </div>
    </form>
  );
};
export default EditUserCard;
