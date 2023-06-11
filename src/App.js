import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Adduser from './Components/Adduser';
import Edit from './Components/Edit';
import View from './Components/View';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar title="MY CRUD" />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adduser' element={<Adduser />} />
          <Route path='/user/edit/:userId' element={<Edit />} />
          <Route path='/user/view/:userId' element={<View />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
