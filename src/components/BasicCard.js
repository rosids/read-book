import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import DeleteDialog from './DeleteDialog';

export default function BasicCard({ book }) {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleDelete = () => {
    setOpen(true);
  }

  const handleEdit = () => {
    navigate(`/editar/${book._id}`,  {
      state: { id: book._id, name: book.name, comment: book.comment },
    })
  };

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Livro
          </Typography>
          <Typography variant="h5" component="div">
            {book.name}
          </Typography>
          <br />
          <Typography variant="body" style={{ wordBreak: 'break-word' }}>
            {book.comment ? book.comment : 'Não há comentários sobre o livro.'}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: 'flex-end' }}>
          <Button size="small" onClick={handleEdit}>Atualizar</Button>
          <Button size="small" color="error" onClick={handleDelete}>Excluir</Button>
        </CardActions>
      </Card>
      <div style={{display: 'none'}}>
        <DeleteDialog open={open} setOpen={setOpen} bookId={book._id}  />
      </div>
    </>
  );
}
