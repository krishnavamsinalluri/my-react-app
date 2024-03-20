import React from 'react';
import {  Routes, Route } from 'react-router-dom';

import Landingpage from './store/pages/Landingpage';
import Mobilespage from './store/pages/Mobilespage';
import Mobliessingles from './store/singles/Mobliessingles';
import Computerpage from './store/pages/Computerpage';
import Computersingle from './store/singles/Computersingle';
import Furniturepage from './store/pages/Furniturepage';
import Furnituresingle from './store/singles/Furnituresingle';
import Menpage from './store/pages/Menpage';
import Mensingle from './store/singles/Mensingle';
import Watchpage from './store/pages/Watchpage';
import Watchsingle from './store/singles/Watchsingle';
import Speakerpage from './store/pages/Speakerpage';
import Speakersingle from './store/singles/Speakersingle';
import Womenpage from './store/pages/Womenpage';
import Womensingle from './store/singles/Womensingle';
import Usercart from './store/Usercart';
import Buynow from './store/Buynow';

function App() {
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/mobiles" element={<Mobilespage />} />
          <Route path="/mobiles/:id" element={<Mobliessingles />} />
          <Route path="/computers" element={<Computerpage />} />
          <Route path="/computers/:id" element={<Computersingle />} />
          <Route path="/furn" element={<Furniturepage />} />
          <Route path="/furn/:id" element={<Furnituresingle />} />
          <Route path="/men" element={<Menpage />} />
          <Route path="/men/:id" element={<Mensingle />} />
          <Route path="/watch" element={<Watchpage />} />
          <Route path="/watch/:id" element={<Watchsingle />} />
          <Route path="/speaker" element={<Speakerpage />} />
          <Route path="/speaker/:id" element={<Speakersingle />} />
          <Route path="/women" element={<Womenpage />} />
          <Route path="/women/:id" element={<Womensingle />} />
          <Route path="/cart" element={<Usercart />} />
          <Route path="/buynow/" element={<Buynow />} />
        </Routes>
      
    </div>
  );
}

export default App;
