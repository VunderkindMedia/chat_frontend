import React, {useEffect, useRef, useState} from 'react';
import {
  FloatingMenu,
  MainButton,
  ChildButton,
} from 'react-floating-button-menu';
import {
  PlusOutlined,
  PictureOutlined,
  SmileOutlined, SendOutlined,
} from '@ant-design/icons';
import {Button, Input} from 'antd';
import Picker  from "emoji-picker-react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MessageList,
  Message,
} from "@chatscope/chat-ui-kit-react";


export const Chat = ({socket}) => {

  const [ fabIsOpen, setFabOpen ] = useState(false);
  const [ inputValue, setinputValue ] = useState(null);
  const [ isPickerShow, setPickerShow ] = useState(false);

  const [ state, setState ] = useState({
    chatReady: 'false',
    socketID: null,
    messages: [
      {
        type: 'text',
        imageSrc: 'src',
        imageAlt: 'imageAltText',
        imageWidth: 'width',
        text: 'text',
        socketID: 'id',
        date: 'date',
      },
    ]
  })

  const sendMessage = () => {
    socket.current.emit('send_message', inputValue)
  }

  const onEmojiClick = (event, emojiObject) => {
    setinputValue(prev => prev ? prev + emojiObject.emoji : emojiObject.emoji);
  };

  return (
      <div className='chat'>
        <div className='wrapper'>
          <div className="chat__main">
            <div className="chat__header">1</div>
            <div className="chat__body">
              <MessageList>
                <Message model={{
                  direction: "incoming"
                }}>
                  {/*<Avatar src={akaneIco} name="Akane" />*/}
                  <Message.TextContent text="Hello my friend" />
                  {/*<Message.ImageContent src={<SmileOutlined />} alt="Akane avatar" width={200} />*/}

                </Message>

              </MessageList>
            </div>
            <div className="chat__footer">
              <FloatingMenu
                  slideSpeed={500}
                  direction="up"
                  spacing={8}
                  isOpen={fabIsOpen}
                  className={'chat__fab_menu'}
              >
                <MainButton
                    iconResting={<PlusOutlined />}
                    iconActive={<PlusOutlined />}
                    // backgroundColor="black"
                    className={'chat__fab'}
                    onClick={() => setFabOpen(!fabIsOpen)}
                    size={36}
                />
                <ChildButton
                    icon={<PictureOutlined />}
                    // backgroundColor="white"
                    size={30}
                    className={'chat__fab'}
                    onClick={() => console.log('First button clicked')}
                />
              </FloatingMenu>
              <Input type={'textarea'} className={'chat__input'} placeholder="Введите сообщение..." value={inputValue} onChange={(e) => setinputValue(e.target.value)}/>
              <Button size={'large'} className={'chat__smiles_btn'} shape="circle" icon={<SmileOutlined />} onClick={() => setPickerShow(!isPickerShow)}/>
              {isPickerShow && <Picker className={'chat__emoji_picker'} disableSearchBar={true} onEmojiClick={onEmojiClick}/>}
              <div onClick={()=>sendMessage()} className={'chat__send_btn'}>
                <SendOutlined size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
