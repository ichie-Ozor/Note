import React from 'react'
import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material' 
import DeleteIcon from '@mui/icons-material/Delete';

export default function NoteCard({ note, deleteHandler }) {
  return (
    <div>
      <Card elevation={7}>
        <CardHeader 
          action={
            <IconButton onClick={() => deleteHandler(note.id)}>
                <DeleteIcon />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
            <Typography variant='body2' color="textSecondary">
                {note.details}
            </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
