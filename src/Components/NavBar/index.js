import React from 'react'
import {Logo} from '../Static/Logo';
import logo from '../../assets/images/logo.png'

export const NavBar = () => {
  return (
      <div className={'nav_bar'}>
        <Logo prefixContainer={'nav_bar'} title={'test'} image={logo} />
      </div>
  )
}
