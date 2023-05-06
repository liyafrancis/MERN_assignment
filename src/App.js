
import './App.css';
import { Route, Routes,Link } from 'react-router-dom';
import { AppBar, Button, Toolbar } from '@mui/material'

import Employee from './Components/Employee';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
       <AppBar>
      <Toolbar >
      <Button  color='inherit' ><Link to={'/add'} style={{textDecoration:'none',color:'white'}}>Home</Link> </Button>
      <Button  color='inherit' ><Link to={'/view'} style={{textDecoration:'none',color:'white'}}>Employee</Link> </Button>
  
      </Toolbar>  
      </AppBar> 

      <Routes>
    <Route path='/add' element={<Home/>}/>
    <Route path='/view' element={<Employee/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
