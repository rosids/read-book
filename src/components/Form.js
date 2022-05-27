import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from 'react-router-dom';

import { fetchNewBook, fetchUpdatedBook } from "../utils/api";
import ActionResponse from "./ActionResponse";

const useStyles = makeStyles({
  form: {
    padding: '8px 16px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
});

function Form({ isEdit }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if(isEdit) {
      const { id, name, comment } = location.state;
      setId(id);
      setName(name);
      setComment(comment);
    }
  }, [location, isEdit]);

  const updated = () => {
    fetchUpdatedBook(id, name, comment).then((res) => {
      if(res.error) {
        setMessage(res.error.message);
        setError(true);
        return setOpen(true);
      }
      setOpen(true);
      setError(false);
      setMessage(res.message);
    })
  };

  const create = () => {
    fetchNewBook(name, comment).then((res) => {
      if(res.error) {
        setMessage(res.error.message);
        setError(true);
        return setOpen(true);
      }

      setOpen(true);
      setError(false);
      setMessage(res.message);
    });
  };

  const returnPage = () => {
    const backPage = -1;
    navigate(backPage);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className={classes.form}
    >
      <TextField
        required
        id="outlined-required"
        label="Nome"
        margin="normal"
        value={name}
        onChange={({ target }) => setName(target.value)}
        fullWidth
      />
      <TextField
        id="outlined-multiline-static"
        label="Comentário"
        multiline
        margin="normal"
        rows={4}
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        fullWidth
      />
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          size="medium"
          onClick={returnPage}
          color="error"
          style={{ marginRight: 8 }}
        >
          Voltar
        </Button>
        <Button
          variant="contained"
          size="medium"
          onClick={() => isEdit ? updated() : create()}
        >
          {isEdit ? 'Salvar' : 'Criar'}
        </Button>
      </div>
      <ActionResponse open={open} setOpen={setOpen} message={message} error={error} />
    </Box>
  );
}

export default Form;
