import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import Denglu from './denglu'
import Houtai from './houtai'
import 'antd/dist/antd.css';
import './style.scss'



const Index = (props) => {
  console.log(props);
  return (
    <div className='add'>
      <div className='add-top'>
        <Routes>
          <Route path='denglu'  element={<Denglu/>}></Route>
          <Route path='home'  element={<Houtai/>}></Route>
          {/* <Route path='/shop'  element={<Shop/>}></Route>
          <Route path='/type'  element={<Type/>}></Route>
          <Route path='/my'  element={<My/>}></Route> */}
          {/* <Route path='*'   element={<Denglu/>}></Route> */}
          <Route path='*'   element={<Navigate replace to="denglu"  />}></Route>

        </Routes>
      </div>

    </div>
  );
}

export default Index;
