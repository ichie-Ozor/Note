import React, { useState } from 'react'
import { FormControlLabel, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { makeStyles } from 'tss-react/mui';
import { RadioGroup, Radio, TextField } from '@mui/material'



const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
  // btn: {
  //   fontSize: 60,
  //   backgroundColor: 'red',
  //   '&:hover' : {
  //     backgroundColor: 'blue'
  //   }
  // },
  // title : {
  //   textDecoration: 'underline',
  //   marginBottom: 20
  // }
})

export default function Create() {
const classes = useStyles()
const [title, setTitle] = useState('')
const [detail, setDetail] = useState('')
const [titleError, setTitleError] = useState(false)
const [detailError, setDetailError] = useState(false)


const handleSubmit = (e) => {
  e.preventDefault()

  setTitleError(false)
  setDetailError(false)

  if (title === '') {
    setTitleError(true)
  }
  if (detail === ''){
    setDetailError(true)
  }
  if (title && detail){
    console.log(title, detail)
  }
}


// console.log(classes.btn)
  return (
    <Container>
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
        />
         <TextField 
          onChange={(e) => setDetail(e.target.value)}
          className={classes.field}
          label="Details"
          variant='outlined'
          color='secondary'
          multiline
          rows={4}
          required
          fullWidth
          error={detailError}
        />
        <RadioGroup>
        <FormControlLabel value='money' control={<Radio />} label='Money'/>
        <FormControlLabel value='todos' control={<Radio />} label='Todos'/>
        <FormControlLabel value='reminder' control={<Radio />} label='Reminder'/>
        <FormControlLabel value='work' control={<Radio />} label='Work'/>
        </RadioGroup>


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

</Container>
  )
}
