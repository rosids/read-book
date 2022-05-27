import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

const style = {
  display: '-webkit-box',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: '1',
  WebkitBoxOrient: 'vertical'
};

export default function NestedList({ lists }) {
  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/${id}`, {
      state: { id: `${id}` },
    });
  };

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" style={{ fontSize: '1rem', textAlign: 'center'}}>
          Livros Lidos
        </ListSubheader>
      }
    >
      {lists.data.map((list) => (
          <ListItemButton key={list._id} onClick={() => handleDetails(list._id)} >
            <ListItemText primary={list.name} style={style} />
          </ListItemButton>
        ))
      }
    </List>
  );
}
