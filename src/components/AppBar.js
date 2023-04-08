import React from 'react'
import { Container, Avatar, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { format } from 'date-fns'
import { red } from '@mui/material/colors'





const useStyles = makeStyles({
    date: {
        flexGrow: 1,
        backgroundColor: red
    },
    avatar: {
        marginLeft: 16
    }
})

export default function AppBar() {
   const classes = useStyles()


  return (
    <Container className='appbar'>
       <Toolbar>
           <Typography className={classes.date}>
               Today is the { format(new Date(), 'do MMMM Y')}  {/*  first install "date-fns" before you can import format from it */}
           </Typography>
           <Typography>
            Ozoemena
           </Typography>
           <Avatar src='/mario.jpg' className={classes.avatar}/>
        </Toolbar>
    </Container>
  )
}
