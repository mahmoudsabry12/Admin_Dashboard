// import { Table } from '@mui/material'
import React from 'react'
import Chart from '../../components/Chart/Chart'
import Featured from '../../components/Featured/Featured'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Widget from '../../components/Widget/Widget'
import Table from '../../components/Table/Table'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
       
        <div className='homeContainer'>
           <Navbar />
           <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
           </div>
           <div className="charts">
            <Featured />
            <Chart aspect={2 / 1} tittle="lastest 6 mongths (Revenue)" />
           </div>
           <div className="listContainer">
              <div className="listTittle"> Latest Transactions </div>
             <Table />
            </div>
          </div>
    </div>
  )
}

export default Home