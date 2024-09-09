import {  Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div><br /><br />
    <h2>ADD PRODUCT</h2>

    <TextField type='text' label="Product Name" variant="outlined" /><br /><br /> 
    <TextField type='text' label="Image" variant="outlined" />  <br /><br />
    <TextField type='text' label="Price" variant="outlined" /><br /><br />
    <TextField type='text' label="Category" variant="outlined" /><br /><br />
    
    <Button variant="contained" type='submit' color='warning'>ADD</Button>&nbsp;
    <Button variant="contained" type='submit' color='warning'>CLEAR</Button>
    

    </div>
  )
}

export default Add