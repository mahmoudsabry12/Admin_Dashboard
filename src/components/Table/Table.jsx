import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const rows = [
  // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
  {
    id:1,
    product: "acer nitro" ,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_7Fd3vbEQtd5k9J4CbisYln5zxnec9mTFLg&usqp=CAU",
    customer: "mahmoud",
    date:"1 october",
    amount: 100,
    method: "cash on Delevery",
    status:"Approved"
  },
  {
    id:2,
    product: "acer nitro" ,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPo5tOBFV_uV5lXf9YT7fv6bK3PfQYl_iIaQ&usqp=CAUs",
    customer: "mahmoud",
    date:"1 october",
    amount: 100,
    method: "cash on Delevery",
    status:"Pending"
  },
  {
    id:3,
    product: "acer nitro" ,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUkDvW-iV9widvM9F3K_uLYm8q4uUFtf6eQ&usqp=CAU",
    customer: "mahmoud",
    date:"1 october",
    amount: 100,
    method: "cash on Delevery",
    status:"Approved"
  },
  {
  id:4,
  product: "acer nitro" ,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSOwKI_t48GgDw1EjJ9Z7NU1XhyqyQjagdjw&usqp=CAU",
  customer: "mahmoud",
  date:"1 october",
  amount: 100,
  method: "cash on Delevery",
  status:"Approved"
},
];


const Tables = () => {
  return (
    <div className='table'>
       <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell' >Id</TableCell>
            <TableCell className='tableCell' align="right">Product</TableCell>
            {/* <TableCell className='tableCell' align="center">Img</TableCell> */}
            <TableCell className='tableCell' align="right">Customer</TableCell>
            <TableCell className='tableCell' align="right">Date</TableCell>
            <TableCell className='tableCell' align="right">Amount</TableCell>
            <TableCell className='tableCell' align="right">Payment method</TableCell>
            <TableCell className='tableCell' align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}   >
              <TableCell className='tableCell' >{row.id} </TableCell>    
              <TableCell className='tableCell' align="right">
                <div className="cellWrapper">
                 
                  <img src={row.img} alt="" className='image'/>
                   {row.product}
                </div> 
              </TableCell>
              {/* <TableCell className='tableCell' align="right">{row.img}</TableCell> */}
              <TableCell className='tableCell' align="right">{row.customer}</TableCell>
              <TableCell className='tableCell' align="right">{row.date}</TableCell>
              <TableCell className='tableCell' align="right">{row.amount}</TableCell>
              <TableCell className='tableCell' align="right">{row.method}</TableCell>
              <TableCell className={`tableCell ${row.status}`} align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Tables