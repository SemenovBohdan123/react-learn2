import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableCell, TableRow, Box, Button } from '@mui/material';

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
            <TableCell>Name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Age</TableCell>
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
    <TableOfUsers data={users} />
  )
}

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
            <TableCell>Name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Href</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) =>
            <TableRow>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>
                <a onClick={showMasage}>
                  Click</a>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <Button onClick={showMasage}>
          Show Masage
        </Button>
      </Table>
    </Box>
  )
}

const Task2 = () => {
  const [users, setUsers] = useState(USERS)

  const showMasage = () => {
    alert('!')
  }

  return (
    <TableOfUsers
      data={users}
      showMasage={showMasage}
    />
  )
}


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
            <TableCell>Name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Href</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) =>
            <TableRow>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>
                <a onClick={() => showMasage(user.name)}>
                  Click
                </a>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <Button onClick={showMasage}>
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

const USERS = [
  {
    id: 1,
    age: 10,
    name: 'Bohdan',
    lastName: 'Semenov'
  },
  {
    id: 2,
    age: 20,
    name: 'Artem',
    lastName: 'Semenov'
  },
  {
    id: 3,
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
            <TableCell>Name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Href</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) =>
            <TableRow>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>
                <a onClick={() => showMasage(user.id)}>
                  Click
                </a>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <Button onClick={showMasage}>
          Show Masage
        </Button>
      </Table>
    </Box>
  )
}

const Task4 = () => {
  const [users, setUsers] = useState(USERS)

  const showMasage = (id) => {
    alert(id)
  }

  return (
    <TableOfUsers
      data={users}
      showMasage={showMasage}
    />
  )
}

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

const TableOfUsers = ({ data, deletUser }) => {
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
          {data.map((user, key) =>
            <TableRow key={key}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>
                <Button
                  onClick={() => deletUser(key)}
                >
                  Delet
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <Button onClick={deletUser}>
          Show Masage
        </Button>
      </Table>
    </Box>
  )
}

const Task5 = () => {

  const [users, setUsers] = useState(USERS)

  const deletUser = (key) => {
    const copyUsers = [...users]

    copyUsers.splice(key, 1)

    setUsers(copyUsers)
  }

  console.log(users);
  return (
    <TableOfUsers
      data={users}
      deletUser={deletUser}
    />
  )
}

export default Task5
