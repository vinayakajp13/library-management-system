import Home from './component/home.jsx'
import Admin from './component/admin.jsx'
import User from './component/user.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin-login" element={<Admin/>}/>
        <Route path="/user-login" element={<User/>} />
        <Route path="*" element="" />
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
