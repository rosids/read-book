import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/styles';
import Paper from '@mui/material/Paper';

import ResponsiveAppBar from "../components/ResponsiveAppBar";
import NestedList from "../components/NestedList";
import { fetchBooks } from "../utils/api";

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

function Home() {
  const classes = useStyles();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const books = await fetchBooks();
      setBooks(books);
    };

    fetchApi();
  }, []);

  return (
    <main className={classes.page}>
      <ResponsiveAppBar />
      <Paper elevation={4} className={classes.card}>
        <NestedList lists={books} />

      </Paper>
    </main>
  );
}

export default Home;
