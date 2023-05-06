import React from 'react'
import {TextField,Button} from '@mui/material'
const Employee = () => {
  return (
    <div style={{paddingTop:"100px"}}> 
      <TextField variant='outlined' label='Name'/>
      <br/><br/>
      <TextField variant='outlined' label='Designation'/>
      <br/><br/>
      <TextField variant='outlined' label='Location'/>
      <br/><br/>
      <TextField variant='outlined' label='Salary'/>
      <br/><br/>
      <Button variant='contained'>Submit</Button>
      

      

    </div>
  )
}

export default Employee
