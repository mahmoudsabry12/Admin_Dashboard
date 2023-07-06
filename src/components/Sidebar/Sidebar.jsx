import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PollIcon from '@mui/icons-material/Poll';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import {Link} from "react-router-dom"
import { DarkModeContext } from '../../context/darkModeContext';


const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext)

  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to="/" style={{textDecoration: "none"}} > 
            <span className='logo'> SABRY</span>
            </Link> 
        </div>
        <hr />
        <div className='center'> 
            <ul>
                <p className='title'> MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className='title'> LISTS</p>
                <Link to="/products" style={{textDecoration: "none"}} > 
                <li>
                    <ProductionQuantityLimitsIcon className="icon"/>
                <span> Product </span>
                </li>
                </Link>
                <Link to="/users" style={{textDecoration: "none"}} > 
                <li>
                    <AssignmentIndIcon className="icon"/>
                <span> Users </span>
                </li>
                </Link>
                <li>
                    <CreditCardIcon className="icon"/>
                <span> Orders </span>
                </li>
                <li>
                    <LocalShippingIcon className="icon"/>
                <span> Delevery </span>
                </li>
                <p className='title'> USIFUL</p>
                <li>
                    <PollIcon className="icon"/>
                <span> Stats </span>
                </li>
                <li>
                    <NotificationsIcon className="icon"/>
                <span> Notifications </span>
                </li>
                <p className='title'> SERVICES</p>
                <li>
                    <LocalHospitalOutlinedIcon className="icon"/>
                <span> System Health </span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className="icon"/>
                <span> Logs </span>
                </li>
                <li>
                    <SettingsApplicationsIcon className="icon"/>
                <span> Settings </span>
                </li>
                <p className='title'> USER</p>
                <li>
                    <AccountCircleIcon className="icon" />
                <span> Profile </span>
                </li>
                <li>
                    <LogoutIcon className="icon"/>
                <span> Logout </span>
                </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className="coloroption" onClick={() => dispatch({ type:"LIGHT" })}></div> 
            <div className="coloroption" onClick={() => dispatch({ type:"DARK" })}></div>   
         </div>
    </div>
  )
}

export default Sidebar