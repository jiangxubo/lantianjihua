import React,{useState,useRef,useEffect} from 'react';
// import { Input } from 'antd-mobile'
import { Form, Input, Checkbox } from 'antd-mobile'
import {  useNavigate } from "react-router-dom";
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
// import styles from './demo2.less'
import './style.scss'
const Index = (props) => {
  const tiao = useNavigate()
  const [value,svalue] = useState(false)
  const [form] = Form.useForm()

  const [visible, setVisible] = useState(false)
  const denglu = ()=>{
    // console.log(form.getFieldValue());
    let obj =form.getFieldValue()
    if (value) {
      localStorage.setItem('user',JSON.stringify(obj))
    }else{
      localStorage.removeItem('user')
    }


    tiao('/home')

  }
  useEffect(()=>{
    if(localStorage.getItem('user')){
      let user = JSON.parse(localStorage.getItem('user'))
      form.setFieldsValue(user)
      svalue(true)
    }else{

    }
  },[])
  return (
    <>
    <div className='lantian-denglu'>
      <div className='login'>
        <div className='icon'></div>
        <div style={{height:1}}></div>
        <div className='zhanghao'>
        <Form layout='horizontal' form={form}>
          <Form.Item label='用户名' name='username'>
            <Input placeholder='请输入用户名' clearable />
          </Form.Item>
          <Form.Item
            label='密码'
            name='password'
            extra={
              <div className=".eye">
                {!visible ? (
                  <EyeInvisibleOutline onClick={() => setVisible(true)} />
                ) : (
                  <EyeOutline onClick={() => setVisible(false)} />
                )}
              </div>
            }
          >
            <Input
              placeholder='请输入密码'
              clearable
              type={visible ? 'text' : 'password'}
            />
          </Form.Item>
        </Form>
        </div>
        <div className='jizhu'> <input type="checkbox" name="category" checked={value} onChange={(e)=>{svalue(e.target.checked); }} /> &nbsp;记住账号和密码</div>
        <div className='liji' onClick={()=>{denglu()}}>立即登陆</div>
        <div className='lijizhuce' onClick={()=>{ tiao('/zhuce')}}>立即注册</div>
      </div>
    </div>
    </>
   
  );
}

export default Index;
