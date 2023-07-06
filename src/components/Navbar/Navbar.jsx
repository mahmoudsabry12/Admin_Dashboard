import React, { useContext } from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext)
  
  return (
    <div className='navbar'>
     <div className='wrapper'> 
     <div className="search" >
      <input type="text" placeholder='Search' style={{backgroundColor: "transparent"}}/>
      <SearchIcon />
     </div>
     <div className="items">
      <div className="item lang" >
        <p>English</p>
        <LanguageOutlinedIcon className='icon'/>
      </div>
      <div className="item">
        <DarkModeOutlinedIcon className='icon' onClick={()=> dispatch({ type:"TOGGLE" })}/>
      </div>
      <div className="item">
        <FullscreenExitOutlinedIcon className='icon'/>
      </div>
      <div className="item">
        <NotificationsIcon className='icon' />
        <div className="counter">2</div>
      </div>
      <div className="item" >
        <ChatBubbleIcon  className='icon'/>
        <div className="counter">3</div>
      </div>
      <div className="item">
        <ListOutlinedIcon className='icon'/>
      </div>
     </div>
     </div>
    </div>
  )
}

export default Navbar