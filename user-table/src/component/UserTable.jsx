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
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


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
    <div className='margin'>
    <Box component="span" sx={{ m: 4, p:2,  border: '2px dashed grey' }}>
      <Button>
      <span>Male users: {maleCount}</span>
      <span >&nbsp; Female users: {femaleCount}</span>
      </Button>
    </Box>
    </div>
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700, minHeight: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user.id}
              </StyledTableCell>
              <StyledTableCell align="right">{user.name}</StyledTableCell>
              <StyledTableCell align="right">{user.email}</StyledTableCell>
              <StyledTableCell align="right">{user.gender}</StyledTableCell>
              <StyledTableCell align="right">{user.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </>
    
  );
}











