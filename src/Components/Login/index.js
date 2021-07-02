import React, {useContext, useEffect, useState} from 'react';
import { Radio, Button, Checkbox } from 'antd';
import { lightTheme, darkThemes } from '../../assets/styles/themes/themes_colors';
import Text from 'antd/es/typography/Text';
import {AppContext} from '../../context/AppContext';
export const Login = () => {

  const { connect } = useContext(AppContext);

  const [fieldsValue, setFieldsValue] = useState({target: 'normal', me_sex: 0, member_sex: 0, me_age: null, member_age: []});
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(()=> {
    console.log(theme);
    window.less
        .modifyVars(theme === 'light' ? lightTheme : darkThemes)
        .then(() => {
          localStorage.setItem('theme', theme);
        })
        .catch(error => {
          console.error(error);
        });
  },[theme])
  const onChangeField = (e) => {
    setFieldsValue(prevState=> ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const toggleTheme = (value) => {
    setTheme(value)
  }

  const toggleForm = () => {
    connect(fieldsValue);
  }

  return (
      <div className='login'>
        <Text className={'wrapper subtitle login__subtitle'}>Введите данные для поиска собеседника:</Text>
        <div className="wrapper">
          <form action="#" className="search_form">
            <Text>Тема общения:</Text>
            <Radio.Group name='target' defaultValue={'normal'} className={'search_form__target'} size="medium" onChange={onChangeField}>
              <Radio.Button style={{marginRight: 10}} value="normal">Общение</Radio.Button>
              <Radio.Button style={{marginLeft: 10}} value="flirt">Флирт 18+</Radio.Button>
            </Radio.Group>
            <div className="search_form__searches">
              <div className="search_form__answers" style={{marginRight: 10}}>
                <p className='search_form__fields_title'>Ваш пол:</p>
                <Radio.Group name='me_sex' defaultValue={fieldsValue['me_sex']} size="medium" onChange={onChangeField}>
                  <Radio.Button value={0}>Некто</Radio.Button>
                  <Radio.Button value={1}>Муж.</Radio.Button>
                  <Radio.Button value={2}>Жен.</Radio.Button>
                </Radio.Group>

                <p className='search_form__fields_title'>Ваш возраст:</p>
                <Radio.Group className='search_form__age' name='me_age' size="medium" onChange={onChangeField}>
                  <Radio.Button disabled={fieldsValue['me_sex']===0} value={0}>до 17 лет</Radio.Button>
                  <Radio.Button disabled={fieldsValue['me_sex']===0} value={1}>от 18 до 21 года</Radio.Button>
                  <Radio.Button disabled={fieldsValue['me_sex']===0} value={2}>от 22 до 25 лет</Radio.Button>
                  <Radio.Button disabled={fieldsValue['me_sex']===0} value={3}>от 26 до 35 лет</Radio.Button>
                  <Radio.Button disabled={fieldsValue['me_sex']===0} value={4}>старше 36 лет</Radio.Button>
                </Radio.Group>
              </div>
              <div className="search_form__answers" style={{marginLeft: 10}}>
                <p className='search_form__fields_title'>Пол собеседника:</p>
                <Radio.Group name='member_sex' defaultValue={fieldsValue['member_sex']}  size="medium" onChange={onChangeField}>
                  <Radio.Button value={0}>Не важно</Radio.Button>
                  <Radio.Button value={1}>Муж.</Radio.Button>
                  <Radio.Button value={2}>Жен.</Radio.Button>
                </Radio.Group>

                <p className='search_form__fields_title'>Возраст собеседника:</p>
                <Checkbox.Group className='search_form__age' name='member_age' size="medium" onChange={(value)=> {
                  onChangeField({
                    target: {
                      value: value,
                      name: 'member_age'
                    }
                  })
                }}>
                  <Checkbox prefixCls={'ant-radio-button'} disabled={fieldsValue['member_sex']===0} value={0}>до 17 лет</Checkbox>
                  <Checkbox prefixCls={'ant-radio-button'} disabled={fieldsValue['member_sex']===0} value={1}>от 18 до 21 года</Checkbox>
                  <Checkbox prefixCls={'ant-radio-button'} disabled={fieldsValue['member_sex']===0} value={2}>от 22 до 25 лет</Checkbox>
                  <Checkbox prefixCls={'ant-radio-button'} disabled={fieldsValue['member_sex']===0} value={3}>от 26 до 35 лет</Checkbox>
                  <Checkbox prefixCls={'ant-radio-button'} disabled={fieldsValue['member_sex']===0} value={4}>старше 36 лет</Checkbox>
                </Checkbox.Group>
              </div>
            </div>
            <p className='search_form__fields_title'>Цветовая схема:</p>
            <Radio.Group className={'search_form__theme'} defaultValue={localStorage.getItem('theme') || 'dark'} size="medium" onChange={(e)=>{ toggleTheme(e.target.value)}}>
              <Radio.Button style={{marginRight: 10}} value="light">Светлая</Radio.Button>
              <Radio.Button style={{marginLeft: 10}} value="dark">Темная</Radio.Button>
            </Radio.Group>
            <div className="center">
              <Button type="primary" className='button search_form__submit_btn' loading={false} onClick={()=>{toggleForm()}}>
                Искать собеседника
              </Button>
            </div>
          </form>
        </div>
      </div>
  )
}
