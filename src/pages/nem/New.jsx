import React, { useState } from 'react'
import './new.scss'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const New = ({inputs ,tittle}) => {
  const [file, setFile] = useState("")
  console.log(file)
  return (
    <div className='new'>
          <Sidebar />
       <div className='newContainer'>
          <Navbar /> 
         <div className="top">
          <h1 >{tittle}</h1>
         </div>
         <div className="bottom">
          <div className="left">
            <img src= {file ? URL.createObjectURL(file):"https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"} alt="" />
          </div>
          <div className="right">
            <form >
              <div className="formInput" >
             <label htmlFor="file"> Image:<CloudUploadIcon className='icon' /></label>  
                <input type="file" placeholder='sabry' id='file' style={{display:"none"}}   onChange={(e) => setFile(e.target.files[0])}/>
              </div>
                { inputs.map((e) => (
                   <div className="formInput" key={e.id}>
                <label >{e.label}</label>
                <input type={e.type} placeholder={e.placeholder} />
              </div>
                ) )}

             
              
              <button>send</button>
            </form>
          </div>
         </div>
          </div>
    </div>
  )
}

export default New