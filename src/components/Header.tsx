import React from 'react'
import 'styles/css/header.css'
import { ReactComponent as IconSetting } from "assets/icons/setting.svg";

function Header() {
  return (
    <header id='header'>
        <h2 className='logo'>LOGO</h2>
        <button className='setting-btn'>
          <IconSetting className='icon' />
        </button>
    </header>
  )
}

export default Header