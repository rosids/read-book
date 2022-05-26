import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import { useNavigate } from 'react-router-dom';

function ConfirmationDialogActionRaw({ open, onClose, message, error }) {
  const navigate = useNavigate();

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose();
    navigate('/');
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
    >
      <DialogTitle>{error ? 'Que pena :(': 'Deu tudo certo!!'}</DialogTitle>
      <DialogContent>
        { message }
      </DialogContent>
      <DialogActions>
        { error ?
          <Button autoFocus onClick={handleCancel} color="error">
            Cancelar
          </Button>
        :
          <Button onClick={handleOk} color="success">Ir para home</Button>
        }
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogActionRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  message: PropTypes.string,
  error: PropTypes.bool,
};

export default function ActionResponse({ open, setOpen, message, error }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="div" role="group">
        <ConfirmationDialogActionRaw
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          message={message}
          error={error}
        />
      </List>
    </Box>
  );
}
