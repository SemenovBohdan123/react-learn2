import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableCell, TableRow, Box, Button } from '@mui/material';

// const USERS = [
//   {
//     age: 10,
//     name: 'Bohdan',
//     lastName: 'Semenov'
//   },
//   {
//     age: 20,
//     name: 'Bohdan',
//     lastName: 'Semenov'
//   },
//   {
//     age: 30,
//     name: 'Bohdan',
//     lastName: 'Semenov'
//   }
// ]

// const TableOfUsers = ({ data }) => {
//   return (
//     <Box>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell >Name</TableCell>
//             <TableCell >Last name</TableCell>
//             <TableCell >Age</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((user) =>
//             <TableRow>
//               <TableCell>{user.name}</TableCell>
//               <TableCell>{user.lastName}</TableCell>
//               <TableCell>{user.age}</TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </Box>
//   )
// }

// const Task1 = () => {
//   const [users, setUsers] = useState(USERS)

//   return (
//     <TableOfUsers
//       data={users}
//     />
//   )
// }

// const USERS = [
//   {
//     age: 10,
//     name: 'Bohdan',
//     lastName: 'Semenov'
//   },
//   {
//     age: 20,
//     name: 'Artem',
//     lastName: 'Semenov'
//   },
//   {
//     age: 30,
//     name: 'David',
//     lastName: 'Semenov'
//   }
// ]

// const TableOfUsers = ({ data, showMasage }) => {
//   return (
//     <Box>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell >Name</TableCell>
//             <TableCell >Last name</TableCell>
//             <TableCell >Age</TableCell>
//             <TableCell >Href</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((user) =>
//             <TableRow>
//               <TableCell>{user.name}</TableCell>
//               <TableCell>{user.lastName}</TableCell>
//               <TableCell>{user.age}</TableCell>
//               <TableCell><a onClick={showMasage}>Click</a></TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//         <Button
//           onClick={showMasage}
//         >
//           Show Masage
//         </Button>
//       </Table>
//     </Box>
//   )
// }

// const Task2 = () => {
//   const [users, setUsers] = useState(USERS)

//   const showMasage = () => {
//     alert('!')
//   }

//   return (
//     <TableOfUsers
//       data={users}
//       showMasage={showMasage}
//     />
//   )
// }


const USERS = [
  {
    age: 10,
    name: 'Bohdan',
    lastName: 'Semenov'
  },
  {
    age: 20,
    name: 'Artem',
    lastName: 'Semenov'
  },
  {
    age: 30,
    name: 'David',
    lastName: 'Semenov'
  }
]

const TableOfUsers = ({ data, showMasage }) => {
  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell >Name</TableCell>
            <TableCell >Last name</TableCell>
            <TableCell >Age</TableCell>
            <TableCell >Href</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) =>
            <TableRow>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>
                <a
                  onClick={() => showMasage(user.name)}
                >
                  Click
                </a>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <Button
          onClick={showMasage}
        >
          Show Masage
        </Button>
      </Table>
    </Box>
  )
}

const Task3 = () => {
  const [users, setUsers] = useState(USERS)

  const showMasage = (name) => {
    alert(name)
  }

  return (
    <TableOfUsers
      data={users}
      showMasage={showMasage}
    />
  )
}

export default Task3
