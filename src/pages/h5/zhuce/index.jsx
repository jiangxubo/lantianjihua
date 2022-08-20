import React from 'react';
import { Input } from 'antd-mobile'
import {  useNavigate } from "react-router-dom";
import { LeftOutline, ArrowDownCircleOutline } from 'antd-mobile-icons'
import './style.scss'

const Index = () => {

  const tiao = useNavigate()
  return (
    <div className='lantian-input'>
      <div className='top1'>注册
      <div className='fanhui' onClick={()=>{tiao('/denglu')}}><LeftOutline /></div>
      </div>
       <Input
          className=''
          placeholder='请输入手机号'
        />
           <Input
          className=''
          placeholder='请输入密码'
        />
           <Input
          className=''
          placeholder='请输入安全密码'
        />
           <Input
          className=''
          placeholder='请输入邀请码'
        />
        <div></div>
        <div className='zhuce' onClick={()=>{}}>立即注册</div>
        <div className='denglu' onClick={()=>{tiao('/denglu')}}>已有账号？立即登陆</div>
    </div>
  );
}

export default Index;
