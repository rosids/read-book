import React from "react";
import { makeStyles } from '@material-ui/styles';
import Paper from '@mui/material/Paper';

import ResponsiveAppBar from "../components/ResponsiveAppBar";

import Form from "../components/Form";

const useStyles = makeStyles({
  card: {
    margin: '60px auto auto',
    padding: 10,
    width: '70%',
    '@media (max-width: 900px)': {
      width: '90%',
    },
  },
});

function Edit() {
  const classes = useStyles();

  return (
    <>
      <ResponsiveAppBar />
      <Paper elevation={4} className={classes.card}>
        <Form isEdit={true} />
      </Paper>
    </>
  );
}

export default Edit;
