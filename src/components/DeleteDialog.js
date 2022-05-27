import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import { fetchDeleteBook } from '../utils/api';
import ActionResponse from './ActionResponse';

function DeleteConfirmationDialogRaw({ open, onClose, bookId }) {
  const [openActionResponse, setOpenActionResponse] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    fetchDeleteBook(bookId).then(res => {
      if(res.error) {
        setMessage(res.error.message);
        setError(true);
        return setOpenActionResponse(true);
      }

      setOpenActionResponse(true);
      setError(false);
      setMessage(res.message);
      onClose();
    });
  };

  return (
    <>
      <Dialog
        sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
        maxWidth="xs"
        open={open}
      >
        <DialogTitle>Confirmação de exclusão</DialogTitle>
        <DialogContent dividers>
          Tem certeza que deseja excluir o livro?
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCancel}>
            Cancelar
          </Button>
          <Button onClick={handleOk} color="error">Confirmar</Button>
        </DialogActions>
      </Dialog>
      <ActionResponse open={openActionResponse} setOpen={setOpenActionResponse} message={message} error={error} />
    </>
  );
}

DeleteConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  bookId: PropTypes.string,
};

export default function DeleteDialog({ open, setOpen, bookId }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="div" role="group">
        <DeleteConfirmationDialogRaw
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          bookId={bookId}
        />
      </List>
    </Box>
  );
}
