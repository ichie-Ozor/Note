import React from 'react'
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material' 
import { makeStyles } from '@mui/styles'
import DeleteIcon from '@mui/icons-material/Delete';
import { blue, brown, red, yellow } from '@mui/material/colors';


const useStyles = makeStyles({
  avatar: {
    backgroundColor : (note)=>{
      if (note.category === 'work'){
        return yellow[700]
      }
      if (note.category === 'work'){
        return red[500]
      }
      if (note.category === 'work'){
        return brown[700]
      }
      return blue[500]
    }
  }
})
export default function NoteCard({ note, deleteHandler }) {
  const classes = useStyles(note)


  return (
    <div>
      <Card elevation={7}>
        <CardHeader 
        avatar={
          <Avatar className={classes.avatar}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
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
