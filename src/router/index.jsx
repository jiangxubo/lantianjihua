import React from 'react';
// import {  } from 'react-router-dom'
import H5 from '@/pages/h5'
import PC from '@/pages/pc'


const Index = () => {
  return (
        // <Routes>
        <>
            <Route path="/dhsjkahdkjsa" element={<PC></PC>}></Route>
          <Route path="/" element={<H5></H5>}></Route>
        
        </>
      
        // </Routes>
  );
}

export default Index;
