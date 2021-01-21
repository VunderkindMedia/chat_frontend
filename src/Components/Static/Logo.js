import React from 'react'
import {Typography} from 'antd';

export const Logo = ({image ,title, prefixContainer='default'}) => {
  return (
      <div className={prefixContainer ? prefixContainer + '__logo_container' : 'logo_container'}>
        <img className={prefixContainer ? prefixContainer + '__logo' : 'logo'} src={image} alt={title}/>
        <Typography.Text>{title}</Typography.Text>
      </div>
  )
}
