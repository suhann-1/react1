
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Add from './components/Add';
import Dlt from './components/Dlt';

import Search from './components/Search';
import View from './components/View';



function App() {
  

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/'element={<Add/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/dlt'element={<Dlt/>}/>
      <Route path='/view' element={<View/>}/>

    </Routes>
   </BrowserRouter>
  );
}

export default App;
