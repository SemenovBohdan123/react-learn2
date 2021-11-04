import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableCell, TableRow, Box } from '@mui/material';

const USERS = [
  {
    age: 10,
    name: 'Bohdan',
    lastName: 'Semenov'
  },
  {
    age: 20,
    name: 'Bohdan',
    lastName: 'Semenov'
  },
  {
    age: 30,
    name: 'Bohdan',
    lastName: 'Semenov'
  }
]

const TableOfUsers = ({ data }) => {
  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell >Name</TableCell>
            <TableCell >Last name</TableCell>
            <TableCell >Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) =>
            <TableRow>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.age}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Box>
  )
}

const Task1 = () => {
  const [users, setUsers] = useState(USERS)

  return (
    <TableOfUsers
      data={users}
    />
  )
}

export default Task1
