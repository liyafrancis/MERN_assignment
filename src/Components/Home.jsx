import { Table, TableBody, TableCell, TableContainer, TableHead,TableRow} from '@mui/material'
import axios from 'axios'
import { useEffect, useState} from 'react'

const Home = () => {
    var[data,setData]=useState([])
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
          setData(data=response.data)
          console.log(response.data)
        })
    })
  return (
    <div>
      <TableContainer style={{paddingTop:'100px'}}>
        <Table>
            <TableHead >
                <TableRow >
                    <TableCell>ID</TableCell>
                    <TableCell>NAME</TableCell>
                    <TableCell>EMAIL</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
             {
              data.map((value,index)=>{
                return(
                    <TableRow key={index}>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell> 
                        <TableCell>{value.email}</TableCell>
                      


                    </TableRow>
                )
            })

             }
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home

