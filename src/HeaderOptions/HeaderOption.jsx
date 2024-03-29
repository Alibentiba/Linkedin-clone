import React from 'react'
import './HeaderOption.css'
import {  useSelector } from 'react-redux';
import av from './av.png'

const HeaderOption = ({avatar,Icon,title,Click}) => {
const user1=useSelector(state=>state.userStore.user)

  return (
    <div onClick={Click} className='headerOption'>
     {Icon&& <Icon className='headerOption-icon'/>}
     {avatar &&<img src={user1?(user1?.photoURL):(av)}  className='headerOption-icon'/>}
       <p className='HeaderOption-title'>{title}</p>
    </div>
  )
}

export default HeaderOption