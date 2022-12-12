import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


export default function UserTable() {
const [loading, setLoading] = useState(true);
const [users, setUsers] = useState([]);
const [maleCount, setMaleCount] = useState(0);
const [femaleCount, setFemaleCount] = useState(0);

  useEffect(() => {
    axios.get('https://gorest.co.in/public/v2/users')
      .then((response) => {
        setUsers(response.data);
        const maleUsers = response.data.filter(user => user.gender === 'male');
        const femaleUsers = response.data.filter(user => user.gender === 'female');
        setMaleCount(maleUsers.length);
        setFemaleCount(femaleUsers.length);
        setLoading(false);
      });
  }, []);

if (loading) {
  return <p>Loading...</p>;
}


  return (
    
    <>
    <TableContainer component={Paper}>
      <Table style={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.gender}</TableCell>
             
              <TableCell align="right">{user.status}</TableCell>
              
            </TableRow>
            
          ))
          
          }
        </TableBody>
      </Table>
    </TableContainer>
    <div>
      <h1>User Counter</h1>
      <p>Male users: {maleCount}</p>
      <p>Female users: {femaleCount}</p>
    </div>
    </>
  );
}







