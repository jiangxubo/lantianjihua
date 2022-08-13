import React from 'react';
import { Route, NavLink, Routes } from 'react-router-dom';
import Home from './home'
import Shop from './shop'
import Type from './type'
import My from './my'



import './demo2.scss';
import { flexible } from '@/utils/zishiying';
flexible()
const Index = () => {
  return (
    <div className='add'>
      <div className='add-top'>
        <Routes>
          <Route path='/home'  element={<Home/>}></Route>
          <Route path='/shop'  element={<Shop/>}></Route>
          <Route path='/type'  element={<Type/>}></Route>
          <Route path='/my'  element={<My/>}></Route>
        </Routes>
      </div>

      <div className='navf'>
        <NavLink to="/home" className={({isActive})=>{return isActive?'active1':'page-icon1'}}>
          <div className="nav-icon "></div>
          首页
        </NavLink>
        <NavLink to="/shop"  className={({isActive})=>{return isActive?'active2':'page-icon2'}}>
          <div className="nav-icon"></div>
          积分商城
        </NavLink>
        <NavLink to="/type"  className={({isActive})=>{return isActive?'active3':'page-icon3'}}>
          <div className="nav-icon"></div>
          分类
        </NavLink>
        <NavLink to="/my" className={({isActive})=>{return isActive?'active4':'page-icon4'}}>
          <div className="nav-icon"></div>
          我的
        </NavLink>
      </div>

    </div>
  );
}

export default Index;
