import React from 'react'
import {Logo} from '../Static/Logo';
import logo from '../../assets/images/logo.png'
import {Link} from 'react-router-dom';
import { WechatOutlined } from '@ant-design/icons';

export const NavBar = () => {
  return (
      <div className={'nav_bar'}>
        <div className="wrapper">
          <Logo prefixContainer={'nav_bar'} title={'Логотип'} image={logo} />
          <nav>
            <ul>
              <li>
                <Link className={'nav_bar__link'} to="/login">
                  <WechatOutlined className={'nav_bar__icon'} />
                  Поиск собеседника
                </Link>
              </li>
              <li>
                <Link className={'nav_bar__link'} to="/chat">
                  <WechatOutlined className={'nav_bar__icon'} />
                  Чат
                </Link>
              </li>
              <li>
                <Link className={'nav_bar__link'} to="/users">
                  <WechatOutlined className={'nav_bar__icon'} />
                  Пункт меню 3
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  )
}
