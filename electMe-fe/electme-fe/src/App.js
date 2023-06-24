import './App.css';
import SideBar from './UserAuthentication/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashBoard } from './UserAuthentication/DashBoard';
import './UserAuthentication/DashBoard.css'
import Election from './UserAuthentication/Election';


function App() {
  return (
    <div className="App my-full-container">
    <BrowserRouter>
      <SideBar/>



      <div className="my-page-content">
      <Routes>
        <Route path="/" element={<DashBoard/>}/>
        <Route path="/e" element={<Election/>}/>

      </Routes>
      </div>


    </BrowserRouter>
    </div>
  );
}

export default App;
