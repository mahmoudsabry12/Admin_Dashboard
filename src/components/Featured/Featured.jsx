import React from 'react'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <p className='title' > Total Revenue </p>
            <MoreVertIcon  className='icon'/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={75} text={"75%"} strokeWidth={5}/>
            </div>
            <p className="tittle">totals</p>
            <p className="amount">$2121</p>
            <p className="desc">Lorem ipsum dolor sit,
             amet consectetur adipisicing elit.</p>
             <div className="summary">
              <div className="item">
                <div className="itemTittle">Target</div>
                <div className="itemResult negative">
                  <KeyboardArrowDownIcon fontSize='small' />
                  <div className="resultAmount">$200K</div>
                </div>
              </div>
              <div className="item">
                <div className="itemTittle">Last Week</div>
                <div className="itemResult positive">
                  <KeyboardArrowUpIcon fontSize='small' />
                  <div className="resultAmount">$200K</div>
                </div>
              </div>
              <div className="item">
                <div className="itemTittle">Last Month</div>
                <div className="itemResult positive">
                  <KeyboardArrowUpIcon fontSize='small' />
                  <div className="resultAmount">$200K</div>
                </div>
              </div>
             </div>
            {/* <div className="dd">
              <div className="l">
                <p className="t"> target</p>
                <div className="s">
                  <MoreVertIcon />
                  $12k
                </div>
              </div>
              <div className="l">
              <p className="t"> target</p>
                <div className="s">
                  <MoreVertIcon />
                  $12k
                </div>
              </div>
              <div className="l">
              <p className="t"> target</p>
                <div className="s">
                  <MoreVertIcon />
                  $12k
                </div>
              </div>
            </div> */}

        </div>
    </div>
  )
}

export default Featured