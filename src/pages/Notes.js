import { Button, Container } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react'
import Boxes from './Boxes';

export default function Notes() {
  return (
    <Container>
      Notes Page
      <br />
      <Button
      type='submit'
      variant='contained'
      color='secondary'
      startIcon={<SendIcon />}
      endIcon={<ArrowForwardIosIcon />}
      >
        Submit
      </Button>
      <Boxes />
    </Container>
  )
}
