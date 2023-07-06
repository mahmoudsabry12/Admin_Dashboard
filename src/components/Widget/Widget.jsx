import React from 'react'
import'./widget.scss'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Widget = ({ type }) => {
  const amount = 100
  const dif = 20
  let data;
  switch(type){
    case "user":
      data = { 
        title : "Users",
        isMoney : true,
        link: "view all users",
        icon: <PersonIcon  className='icon'
        style={{
          color: "#FFCB42",
          backgroundColor : "#FDEEDC"
        }}
        />
    };
    break;

    case "order":
      data = { 
      title : "Orders",
      isMoney : true,
      link: "view all orders",
      icon: <ShoppingCartCheckoutIcon  className='icon'
        style={{
          color: "red",
          backgroundColor : "#FF87B2"
        }}
      />
  };
  break;

  case "earning":
    data = { 
    title : "Earnings",
    isMoney : true,
    link: "view net earnings",
    icon: <MonetizationOnIcon  className='icon'
    style={{
      color: "#224B0C",
      backgroundColor : "#CFE8A9"
    }}
    />
  };
  break;

  case "balance":
    data = { 
    title : "Balance",
    isMoney : true,
    link: "view details",
    icon: <AccountBalanceWalletIcon  className='icon'
    style={{
      color: "#3120E0",
      backgroundColor : "#3B9AE1"
    }}
    />
  };
  break;
  default:
    break
}
  return (
    <div className='widget'>
        <div className="left">
           <div className="title">{data.title}</div>
           <div className="counter">{data.isMoney && "$"} {amount} </div>
           <div className="link">{data.link}</div>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardDoubleArrowUpIcon />
            {dif} %
          </div>
          {data.icon}
        </div>
    </div>
  )
}

export default Widget