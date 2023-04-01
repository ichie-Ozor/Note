import React from 'react'
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { makeStyles } from 'tss-react/mui';
// import { makeStyles } from '@mui/material/styles';


const useStyles = makeStyles({
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
console.log(classes.btn)
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
<Button
type='submit'
variant='contained'
color='primary'
className={classes.btn} //ot working
startIcon={<SendIcon />}
endIcon={<ArrowForwardIosIcon />}
onClick={() => { console.log("you clicked me")}}
>
  submit
</Button>
</Container>
  )
}
