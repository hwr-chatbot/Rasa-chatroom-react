import React from 'react';
import { Routes , Route } from 'react-router-dom';

import Chat from './pages/Chat/Chat';
import About from './pages/About/About';
import Feedback from './pages/Feedback/Feedback';
import Imprint from './pages/Imprint/Imprint';
import DataSecurity from './pages/DataSecurity/DataSecurity';

const Main = () => {
  return (
    <Routes> 
      <Route path='/' element={<Chat host="localhost" port={5505} useHttps={true} />}></Route>
      <Route path='/about-the-project' element={<About />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/feedback' element={<Feedback />}></Route>
      <Route path='/imprint' element={<Imprint />}></Route>
      <Route path='/data-security' element={<DataSecurity />}></Route>
      
    </Routes>
  );
}

export default Main;