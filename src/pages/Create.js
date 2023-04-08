import React, { useState } from 'react'
import { FormControlLabel, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { makeStyles } from 'tss-react/mui';
import { makeStyles } from '@mui/styles'
import { FormLabel, FormControl, RadioGroup, Radio, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Boxes from './Boxes';




const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  },
  btn: {
    fontSize: 60,
    backgroundColor: 'red',
    '&:hover' : {
      backgroundColor: 'blue'
    }
  },
  title : {
    textDecoration: 'underline',
    marginBottom: 20
  }
})

export default function Create() {
const classes = useStyles()
const navigate = useNavigate()
const [title, setTitle] = useState('')
const [details, setDetails] = useState('')
const [titleError, setTitleError] = useState(false)
const [detailError, setDetailError] = useState(false)
const [category, setCategory] = useState('money')


const handleSubmit = (e) => {
  e.preventDefault()

  setTitleError(false)
  setDetailError(false)

  if (title === '') {
    setTitleError(true)
  }
  if (details === ''){
    setDetailError(true)
  }
  if (title && details){
    fetch('http://localhost:8000/notes', {
      method: 'POST',
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({ title, details, category})
    }).then(() => navigate('/'))
  }
}


// console.log(classes.btn)
  return (
    <Container style={{display:'block'}}>
      <Typography
        className={classes.title} //not working
        variant="h4"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a new Note
      </Typography>
      
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField 
         onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          id='field'
          label="Note Title"
          variant='outlined'
          color='secondary'
          required
          fullWidth
          error={titleError}
          style={{marginBottom: 20, marginTop: 20, display: 'block'}}
        />
         <TextField 
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant='outlined'
          color='secondary'
          multiline
          rows={4}
          required
          fullWidth
          error={detailError}
          style={{marginBottom: 20, marginTop: 20, display: 'block'}}
        />

        <FormControl className={classes.field}>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
        <FormControlLabel value='money' control={<Radio />} label='Money'/>
        <FormControlLabel value='todos' control={<Radio />} label='Todos'/>
        <FormControlLabel value='reminder' control={<Radio />} label='Reminder'/>
        <FormControlLabel value='work' control={<Radio />} label='Work'/>
        </RadioGroup>
        </FormControl>

        <br />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={classes.btn} //not working
          startIcon={<SendIcon />}
          endIcon={<ArrowForwardIosIcon />}
          onClick={() => { console.log("you clicked me")}}
          >
            submit
        </Button>
       </form>
       <h2>This Part is just for sample</h2>
      <Boxes style={{marginTop:20}}/>
</Container>
  )
}
