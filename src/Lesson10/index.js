import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableCell, TableRow,
  Box,
  Button,
  TextField,
  Typography,
  Checkbox
} from '@mui/material';
import useStyles from './styles';

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
//             <TableCell>Name</TableCell>
//             <TableCell>Last name</TableCell>
//             <TableCell>Age</TableCell>
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
//     <TableOfUsers data={users} />
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
//             <TableCell>Name</TableCell>
//             <TableCell>Last name</TableCell>
//             <TableCell>Age</TableCell>
//             <TableCell>Href</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((user) =>
//             <TableRow>
//               <TableCell>{user.name}</TableCell>
//               <TableCell>{user.lastName}</TableCell>
//               <TableCell>{user.age}</TableCell>
//               <TableCell>
//                 <a onClick={showMasage}>
//                   Click
//                 </a>
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//         <Button onClick={showMasage}>
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
//             <TableCell>Name</TableCell>
//             <TableCell>Last name</TableCell>
//             <TableCell>Age</TableCell>
//             <TableCell>Href</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((user) =>
//             <TableRow>
//               <TableCell>{user.name}</TableCell>
//               <TableCell>{user.lastName}</TableCell>
//               <TableCell>{user.age}</TableCell>
//               <TableCell>
//                 <a onClick={() => showMasage(user.name)}>
//                   Click
//                 </a>
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </Box>
//   )
// }

// const Task3 = () => {
//   const [users, setUsers] = useState(USERS)

//   const showMasage = (name) => {
//     alert(name)
//   }

//   return (
//     <TableOfUsers
//       data={users}
//       showMasage={showMasage}
//     />
//   )
// }

// const USERS = [
//   {
//     id: 1,
//     age: 10,
//     name: 'Bohdan',
//     lastName: 'Semenov'
//   },
//   {
//     id: 2,
//     age: 20,
//     name: 'Artem',
//     lastName: 'Semenov'
//   },
//   {
//     id: 3,
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
//             <TableCell>Name</TableCell>
//             <TableCell>Last name</TableCell>
//             <TableCell>Age</TableCell>
//             <TableCell>Href</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((user) =>
//             <TableRow>
//               <TableCell>{user.name}</TableCell>
//               <TableCell>{user.lastName}</TableCell>
//               <TableCell>{user.age}</TableCell>
//               <TableCell>
//                 <a onClick={() => showMasage(user.id)}>
//                   Click
//                 </a>
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//         <Button onClick={showMasage}>
//           Show Masage
//         </Button>
//       </Table>
//     </Box>
//   )
// }

// const Task4 = () => {
//   const [users, setUsers] = useState(USERS)

//   const showMasage = (id) => {
//     alert(id)
//   }

//   return (
//     <TableOfUsers
//       data={users}
//       showMasage={showMasage}
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

// const TableOfUsers = ({ data, deletUser }) => {
//   return (
//     <Box>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell>Last name</TableCell>
//             <TableCell>Age</TableCell>
//             <TableCell>Href</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((user, key) =>
//             <TableRow key={key}>
//               <TableCell>{user.name}</TableCell>
//               <TableCell>{user.lastName}</TableCell>
//               <TableCell>{user.age}</TableCell>
//               <TableCell>
//                 <Button onClick={() => deletUser(key)}>
//                   Delet
//                 </Button>
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </Box>
//   )
// }

// const Task5 = () => {

//   const [users, setUsers] = useState(USERS)

//   const deletUser = (key) => {
//     const copyUsers = [...users]

//     copyUsers.splice(key, 1)

//     setUsers(copyUsers)
//   }

//   return (
//     <TableOfUsers
//       data={users}
//       deletUser={deletUser}
//     />
//   )
// }

// const ITEMS = [
//   {
//     value: 'one',
//     showInput: false,
//     inputValue: ''
//   },
//   {
//     value: 'two',
//     showInput: false,
//     inputValue: ''

//   },
//   {
//     value: 'thre',
//     showInput: false,
//     inputValue: ''
//   },
//   {
//     value: 'four',
//     showInput: false,
//     inputValue: ''
//   },
//   {
//     value: 'five',
//     showInput: false,
//     inputValue: ''
//   },
// ]

// const ItemsList = ({ data, addInput, changeValue }) => {

//   return (
//     <Box>
//       <List>
//         {data.map((item, key) =>
//           <ListItem>
//             {item.value}
//             {item.showInput ?
//               <TextField
//                 autoFocus='true'
//                 onChange={(event) => {
//                   data[key].inputValue = event.target.value
//                 }}
//                 variant="standard"
//                 onBlur={() => changeValue(key)}
//               /> :
//               <Button
//                 key={key}
//                 onClick={() => addInput(key)}
//               >
//                 Редактировать
//               </Button>
//             }
//           </ListItem>
//         )}
//       </List>
//     </Box>
//   )
// }

// const Task6 = () => {
//   const [items, setItems] = useState(ITEMS)

//   const addInput = (key) => {
//     const copyItems = [...items]

//     copyItems[key].showInput = true

//     setItems(copyItems)
//   }

//   const changeValue = (key) => {
//     const copyItems = [...items]

//     if (copyItems[key].inputValue !== '') {
//       copyItems[key].value = copyItems[key].inputValue
//       copyItems[key].showInput = false
//     } else {
//       copyItems[key].showInput = false
//     }

//     setItems(copyItems)
//   }

//   return (
//     <ItemsList
//       data={items}
//       addInput={addInput}
//       changeValue={changeValue}
//     />
//   )
// }

// const TableOfProducts = ({ data, deletProducts }) => {
//   return (
//     <Box>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Name of products</TableCell>
//             <TableCell>Price</TableCell>
//             <TableCell>Amount</TableCell>
//             <TableCell>Full product cost</TableCell>
//             <TableCell>Delete product</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((products, key) =>
//             <TableRow>
//               <TableCell>{products.lable}</TableCell>
//               <TableCell>{products.price}</TableCell>
//               <TableCell>{products.amount}</TableCell>
//               <TableCell>{products.amount * products.price}</TableCell>
//               <TableCell>
//                 <Button onClick={() => deletProducts(key)}>
//                   Delet
//                 </Button>
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </Box>
//   )

// }

// const Task7 = () => {
//   const [products, setProducts] = useState([
//     {
//       lable: 'Potatoes',
//       price: 5,
//       amount: 7
//     },
//     {
//       lable: 'Milk',
//       price: 50,
//       amount: 2
//     },
//     {
//       lable: 'Bread',
//       price: 20,
//       amount: 3
//     },
//     {
//       lable: 'Sugar',
//       price: 10,
//       amount: 1
//     }
//   ])

//   const deletProducts = (key) => {
//     const copyProducts = [...products]

//     copyProducts.splice(key, 1)

//     setProducts(copyProducts)
//   }

//   return (
//     <TableOfProducts
//       data={products}
//       deletProducts={deletProducts}
//     />
//   )
// }

// const AddNewProduct = ({ addNewProduct }) => {
//   const [newProduct, setNewProucts] = useState({
//     lable: null,
//     price: null,
//     amount: null
//   })

//   const handleInput = (event) => {
//     const copyNewProducts = { ...newProduct }

//     copyNewProducts[event.target.name] = event.target.value

//     setNewProucts(copyNewProducts)
//   }

//   return (
//     <Box>
//       <TextField
//         name='lable'
//         type='text'
//         variant='standard'
//         label='Name'
//         onChange={(event) => handleInput(event)}
//       />
//       <TextField
//         name='price'
//         variant='standard'
//         label='Price'
//         type='number'
//         onChange={(event) => handleInput(event)}
//       />
//       <TextField
//         name='amount'
//         variant='standard'
//         label='Amount'
//         type='number'
//         onChange={(event) => handleInput(event)}
//       />
//       <Button
//         variant='contained'
//         onClick={() => addNewProduct(newProduct)}
//       >
//         Добавить новый продукт
//       </Button>
//     </Box>
//   )
// }

// const TableOfProducts = ({ data, deletProducts }) => {
//   return (
//     <Box>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Name of products</TableCell>
//             <TableCell>Price</TableCell>
//             <TableCell>Amount</TableCell>
//             <TableCell>Full product cost</TableCell>
//             <TableCell>Delete product</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((products, key) =>
//             <TableRow>
//               <TableCell>{products.lable}</TableCell>
//               <TableCell>{products.price}</TableCell>
//               <TableCell>{products.amount}</TableCell>
//               <TableCell>{products.amount * products.price}</TableCell>
//               <TableCell>
//                 <Button onClick={() => deletProducts(key)}>Delet</Button>
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </Box>
//   )

// }

// const Task8 = () => {
//   const [products, setProducts] = useState([
//     {
//       lable: 'Potatoes',
//       price: 5,
//       amount: 7
//     },
//     {
//       lable: 'Milk',
//       price: 50,
//       amount: 2
//     },
//     {
//       lable: 'Bread',
//       price: 20,
//       amount: 3
//     },
//     {
//       lable: 'Sugar',
//       price: 10,
//       amount: 1
//     }
//   ])

//   // arr.reduse

//   const addNewProduct = (data) => {
//     const copyProducts = [...products]

//     if (data.amount && data.lable && data.price) {
//       copyProducts.push(data)

//       setProducts(copyProducts)

//     }
//   }

//   const deletProducts = (key) => {
//     const copyProducts = [...products]

//     copyProducts.splice(key, 1)

//     setProducts(copyProducts)
//   }

//   return (
//     <Box>
//       <TableOfProducts
//         data={products}
//         deletProducts={deletProducts}
//       />
//       <AddNewProduct addNewProduct={addNewProduct} />
//     </Box>
//   )
// }


// const TotalPrice = ({ data }) => {

//   const arrTotalPrice = (data) => {
//     const arr = data.map((product) => product.amount * product.price)
//     return arr
//   }

//   const getTotalPrice = () => {
//     return (
//       arrTotalPrice(data).reduce((acum, current) => acum + current, 0)
//     )
//   }

//   return (
//     <Box>
//       <Typography>
//         Price all products: {getTotalPrice()}
//       </Typography>
//     </Box>
//   )
// }

// const AddNewProduct = ({ addNewProduct }) => {
//   const [newProduct, setNewProucts] = useState({
//     lable: null,
//     price: null,
//     amount: null
//   })

//   const handleInput = (event) => {
//     const copyNewProducts = { ...newProduct }

//     copyNewProducts[event.target.name] = event.target.value

//     setNewProucts(copyNewProducts)

//   }

//   return (
//     <Box>
//       <TextField
//         name='lable'
//         type='text'
//         variant='standard'
//         label='Name'
//         onChange={(event) => handleInput(event)}
//       />
//       <TextField
//         name='price'
//         variant='standard'
//         label='Price'
//         type='number'
//         onChange={(event) => handleInput(event)}
//       />
//       <TextField
//         name='amount'
//         variant='standard'
//         label='Amount'
//         type='number'
//         onChange={(event) => handleInput(event)}
//       />
//       <Button
//         variant='contained'
//         onClick={() => addNewProduct(newProduct)}
//       >
//         Добавить новый продукт
//       </Button>
//     </Box>
//   )
// }

// const TableOfProducts = ({ data, deletProducts }) => {
//   return (
//     <Box>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Name of products</TableCell>
//             <TableCell>Price</TableCell>
//             <TableCell>Amount</TableCell>
//             <TableCell>Full product cost</TableCell>
//             <TableCell>Delete product</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((products, key) =>
//             <TableRow>
//               <TableCell>{products.lable}</TableCell>
//               <TableCell>{products.price}</TableCell>
//               <TableCell>{products.amount}</TableCell>
//               <TableCell>{products.amount * products.price}</TableCell>
//               <TableCell>
//                 <Button onClick={() => deletProducts(key)}>
//                   Delet
//                 </Button>
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </Box>
//   )

// }

// const Task9 = () => {
//   const [products, setProducts] = useState([
//     {
//       lable: 'Potatoes',
//       price: 5,
//       amount: 7,
//     },
//     {
//       lable: 'Milk',
//       price: 50,
//       amount: 2
//     },
//     {
//       lable: 'Bread',
//       price: 20,
//       amount: 3
//     },
//     {
//       lable: 'Sugar',
//       price: 10,
//       amount: 1,
//     }
//   ])

//   const addNewProduct = (data) => {
//     const copyProducts = [...products]
//     if (data.amount && data.lable && data.price) {

//       copyProducts.push(data)

//       setProducts(copyProducts)
//     }
// }

//   const deletProducts = (key) => { 
//     const copyProducts = [...products]

//     copyProducts.splice(key, 1)

//     setProducts(copyProducts)
//   }

//   return (
//     <Box>
//       <TableOfProducts
//         data={products}
//         deletProducts={deletProducts}
//       />
//       <TotalPrice data={products} />
//       <AddNewProduct addNewProduct={addNewProduct} />
//     </Box>
//   )
// }

const TotalPrice = ({ data }) => {

  const classes = useStyles()


  const arrTotalPrice = (data) => {
    const arr = data.map((product) =>
      product.isCheked ? (product.amount * product.price) : false)
    return arr
  }

  const getTotalPrice = () => {
    return (
      arrTotalPrice(data).reduce((acum, current) => acum + current, 0)
    )
  }

  return (
    <Box>
      <Typography>
        Price all products: {getTotalPrice()}
      </Typography>
    </Box>
  )
}

const AddNewProduct = ({ addNewProduct }) => {
  const [newProduct, setNewProucts] = useState({
    lable: null,
    price: null,
    amount: null,
    isCheked: true
  })

  const handleInput = (event) => {
    const copyNewProducts = { ...newProduct }

    copyNewProducts[event.target.name] = event.target.value

    setNewProucts(copyNewProducts)
  }

  return (
    <Box>
      <TextField
        name='lable'
        type='text'
        variant='standard'
        label='Name'
        onChange={(event) => handleInput(event)}
      />
      <TextField
        name='price'
        variant='standard'
        label='Price'
        type='number'
        onChange={(event) => handleInput(event)}
      />
      <TextField
        name='amount'
        variant='standard'
        label='Amount'
        type='number'
        onChange={(event) => handleInput(event)}
      />
      <Button
        variant='contained'
        onClick={() => addNewProduct(newProduct)}
      >
        Добавить новый продукт
      </Button>
    </Box>
  )
}

const TableOfProducts = ({ data, deletProducts, changeCheked }) => {
  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name of products</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Full product cost</TableCell>
            <TableCell></TableCell>
            <TableCell>Delete product</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((products, key) =>
            <TableRow>
              <TableCell>{products.lable}</TableCell>
              <TableCell>{products.price}</TableCell>
              <TableCell>{products.amount}</TableCell>
              <TableCell>{products.amount * products.price}</TableCell>
              <TableCell>
                <Checkbox
                  name={products.lable}
                  onClick={() => changeCheked(key)}
                  checked={products.isCheked}
                />
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => deletProducts(key)}>
                  Delet
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Box>
  )

}

const Task10 = () => {
  const classes = useStyles()
  const [products, setProducts] = useState([
    {
      lable: 'Potatoes',
      price: 5,
      amount: 7,
      isCheked: true
    },
    {
      lable: 'Milk',
      price: 50,
      amount: 2,
      isCheked: true
    },
    {
      lable: 'Bread',
      price: 20,
      amount: 3,
      isCheked: true
    },
    {
      lable: 'Sugar',
      price: 10,
      amount: 1,
      isCheked: true
    }
  ])

  const addNewProduct = (data) => {
    const copyProducts = [...products]

    if (data.amount && data.lable && data.price) {

      copyProducts.push(data)

      setProducts(copyProducts)
    }
  }

  const deletProducts = (key) => {
    const copyProducts = [...products]

    copyProducts.splice(key, 1)

    setProducts(copyProducts)
  }

  const changeCheked = (key) => {
    const copyProducts = [...products]

    copyProducts[key].isCheked = !copyProducts[key].isCheked

    setProducts(copyProducts)
  }

  return (
    <Box className={classes.root}>
      <TableOfProducts
        data={products}
        deletProducts={deletProducts}
        changeCheked={changeCheked}
      />
      <TotalPrice data={products} />
      <AddNewProduct addNewProduct={addNewProduct} />
    </Box>
  )
}



export default Task10
