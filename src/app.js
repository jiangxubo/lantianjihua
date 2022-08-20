import React, {Suspense} from 'react';
// import H5 from '@/pages/h5'
// import Pc from '@/pages/pc'
// import Zhuce from '@/pages/h5/zhuce'
import Denglu from '@/pages/h5/denglu'
import { Route, Routes } from 'react-router-dom'
import {flexible}from '@/utils/zishiying'
const Pc = React.lazy(()=>import('@/pages/pc'))
const H5 = React.lazy(()=>import('@/pages/h5'))
const Zhuce = React.lazy(()=>import('@/pages/h5/zhuce'))



const App = () => {
  if (location.pathname.indexOf('qwe')=== -1) {
    flexible()
  }
  console.log(123);
  // console.log(React.lazy(()=>import('@/pages/pc')));
  return (
      <> 
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Denglu />}></Route>
        <Route path="/qwe/*" element={<Pc />}></Route>
        <Route path="/zhuce" element={<Zhuce />}></Route>
        <Route path="/denglu" element={<Denglu />}></Route>
        <Route path="*" element={<H5 />}></Route>
      </Routes>
      </Suspense>
    </>
  );
}


export default App;