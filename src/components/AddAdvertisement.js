import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));
const handle = event => {
  console.log("hello");
};
export default function FormPropsTextFields() {
  const classes = useStyles();
  const evhand = handle();

  const handleSubmit = event => {
    event.preventDefault();
    console.log(
      "I'm submitting",
      Itemname,
      Price,
      Description,
      Picture,
      Email,
      PhoneNumber
    );
    // this.props.addAd=(this.state);
  };

  const [Itemname, setItemname] = useState(" ");
  const [Price, setPrice] = useState(" ");
  const [Description, setDescription] = useState(" ");
  const [Picture, setPicture] = useState(" ");
  const [Email, setEmail] = useState(" ");
  const [PhoneNumber, setPhoneNumber] = useState(" ");

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h1>Add an ad </h1>
      <div>
        <TextField
          required
          name="Itemname"
          onChange={e => setItemname(e.target.value)}
          value={Itemname}
          label="Item name"
        />
        <TextField
          required
          label="Price"
          type="Number"
          name="Price"
          onChange={e => setPrice(e.target.value)}
        />
        <TextField
          required
          name="Description"
          label="Description"
          onChange={e => setDescription(e.target.value)}
          type="text"
        />{" "}
        <br />
        <TextField
          required
          id="Picture"
          label="Image"
          helperText="URL to an online image"
          onChange={e => setPicture(e.target.value)}
        />{" "}
        <br />
        <br />
        <br />
        <h3>How can the buyer contact you?</h3>
        <TextField
          required
          name="Email"
          onChange={e => setEmail(e.target.value)}
          label="Email"
          type="email"
        />
        <TextField
          required
          name="PhoneNumber"
          onChange={e => setPhoneNumber(e.target.value)}
          label="Phone Number"
          type="number"
        />{" "}
        <br />
        <br />
        <br />
        <Button variant="contained" color="secondary" type="Submit">
          Submit
        </Button>
      </div>
    </form>
  );
}

// export default AddAdvertisement;
