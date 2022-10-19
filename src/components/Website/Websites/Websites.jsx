import React from 'react';

import { Routes, Route } from "react-router-dom";

import Navbars from '../../Navbars/Navbars';
import Navbar from '../../Navbar/Navbar';

import Order from '../Order/Order';
import Sities from '../Sities/Sities';
import Keys from '../Keys/Keys';
import Design from '../Designs/Design';
import Turnkey from '../Turnkey/Turnkey';
import Newkeys from '../Newkeys/Newkeys';
import Creation from '../Creation/Creation';
import Sales from '../Sales/Sales';
import Cost from '../Cost/Cost';
import Stages from '../Stages/Stages';
import Ready from '../Ready/Ready';
import Promotion from '../Promotion/Promotion';

const Websites = () => {
  return (
    <div>
      <Navbars />
      <Navbar />
      <Routes>
        <Route path="/" element={<Order />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Sities />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Keys />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Design />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Turnkey />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Newkeys />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Creation />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Sales />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Cost />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Stages />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Ready />} exact></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Promotion />} exact></Route>
      </Routes>
    
    </div>
  )
}

export default Websites