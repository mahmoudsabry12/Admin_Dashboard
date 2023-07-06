import React from 'react'
import './single.scss'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Chart from '../../components/Chart/Chart'
import List from '../../components/Table/Table'

const Single = () => {
  return (
    <div className='single'>
         <Sidebar />
       <div className='singleContainer'>
          <Navbar />
          <div className="top">
            <div className="left">
              <div className="editbutton">Edit</div>
              <h1 className="tittle">information</h1>
              <div className="item">
                <img src="data:image/jpeg;base64,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"
                 alt="" className='itemImg' />
                 <div className="details">
                  <h2  className='itemTittle'> Mahmoud Sabry</h2>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">mahmoud@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+1 234 567 89</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">Cairo</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue"> kalbsha</span>
                  </div>
                 </div>
              </div>
            </div>
              
            <div className="right">
              <Chart aspect={4 / 1} tittle="User spending (last 6 mongths)"/>
            </div>
          </div>
          <div className="bottom">
            <h1>Last Transacrion</h1>
            <List />
          </div>
          </div>
    </div>
  )
}

export default Single