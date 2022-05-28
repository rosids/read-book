import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import Alert from '@mui/material/Alert';

import ResponsiveAppBar from "../components/ResponsiveAppBar";
import NestedList from "../components/NestedList";
import { fetchBooks } from "../utils/api";

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: 404,
    justifyContent: 'space-between',
    margin: '60px auto 20px',
    padding: 10,
    width: '70%',
    '@media (max-width: 900px)': {
      width: '90%',
    },
  },
  cardWarning: {
    margin: '80px auto',
    justifyContent: 'center',
    padding: '10px !important',
    width: '70%',
    '@media (max-width: 900px)': {
      width: '90%',
    },
  },
  paginationContainer: {
    alignItems: 'center',
    display: 'flex',
    marginBottom: 8,
  },
});

function Home() {
  const classes = useStyles();
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const books = await fetchBooks(page);
      setBooks(books);
      setTotalPages(books.metadata.length ? books.metadata[0].totalPages : 1);
      setLoading(false);
    };

    fetchApi();
  }, [page]);

  const handleChange = (_, value) => {
    setPage(value);
  };

  return (
    <>
      <ResponsiveAppBar />
      {!loading && books.data && !books.data.length &&
        <Alert severity="warning" className={classes.cardWarning}>Você não tem livros lidos. Cadastre um livro!</Alert>
      }
      {!loading && books.data && books.data.length > 0 &&
        <Paper elevation={4} className={classes.card}>
          <NestedList lists={books} />
          <Stack spacing={2} className={classes.paginationContainer}>
            <Pagination count={totalPages} variant="outlined" color="primary" onChange={handleChange} />
          </Stack>
        </Paper>
      }
    </>
  );
}

export default Home;
