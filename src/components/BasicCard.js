import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard({ book }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Livro
        </Typography>
        {book.map(book => (
          <div key={book._id}>
            <Typography variant="h5" component="div">
              {book.name}
            </Typography>
            <br />
            <Typography variant="body">
              {book.comment}
            </Typography>
          </div>
        ))}
      </CardContent>
      <CardActions>
        <Button size="small">Atualizar</Button>
        <Button size="small" color="error">Excluir</Button>
      </CardActions>
    </Card>
  );
}
