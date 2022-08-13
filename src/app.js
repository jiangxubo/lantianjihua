import React, { Component } from 'react';
import H5 from '@/pages/h5'
import Pc from '@/pages/pc'
import { Route, Routes } from 'react-router-dom'


class App extends Component {
  render() {
    return (<>
      <Routes>
        <Route path="/qwe" element={<Pc />}></Route>
        <Route path="*" element={<H5 />}></Route>
      </Routes>
    </>
  
    );
  }
}

export default App;