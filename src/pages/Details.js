import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/styles';
import { useLocation } from 'react-router-dom';
import Paper from '@mui/material/Paper';

import ResponsiveAppBar from "../components/ResponsiveAppBar";
import BasicCard from "../components/BasicCard";

import { fetchBookId } from "../utils/api";

const useStyles = makeStyles({
  page: {
    backgroundColor: '#282c34',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  card: {
    margin: '60px auto auto',
    width: '70%',
    '@media (max-width: 900px)': {
      width: '90%',
    },
  },
});

function Details() {
  const classes = useStyles();
  const location = useLocation();

  const [book, setBook] = useState([]);

  useEffect(() => {
    const { id } = location.state;

    const fetchApi = async () => {
      const book = await fetchBookId(id);
      setBook([book]);
    };

    fetchApi();
  }, [location]);

  return (
    <main className={classes.page}>
      <ResponsiveAppBar />
      <Paper elevation={4} className={classes.card}>
        <BasicCard book={book} />
      </Paper>
    </main>
  );
}

export default Details;
