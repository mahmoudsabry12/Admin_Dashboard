import React, { useState } from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import{useColumns , useRows} from '../../datasource'
import { Link } from 'react-router-dom';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const Datatable = () => {

  const [data,setDate] =useState(useRows)
  const handleDelete=(id) =>{
    setDate(data.filter(item=>item.id !== id))
  }
  const actionColumn = [{
    field:"action ",
    width:200,
    renderCell: (params) => {
      return(
        <div className="cellAction">
          <Link to="/users/test">
          <div className="viewButton">View</div>
          </Link>
          <div className="deleteButton" onClick={()=> handleDelete(params.row.id)}>Delete</div>
        </div>
      )
    }
  }]
  return (
    <div className='datatable'>
      <div className="datatittle">
        Add New User
        <Link to="/users/new" style={{textDecoration:"none"}} className='link'>
          Add New
        </Link>
      </div>
         <DataGrid
         className='datagrid'
        rows={data}
        columns={useColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable