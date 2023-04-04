import AdminHome from './adminhome.jsx';
import AddBook from './addBook.jsx';
import Nav from './adminNavbar.jsx';
import { Routes, Route } from 'react-router-dom';
const AdminPortal = () => {


    return (<div className='adminport'>

        <Nav />

        <Routes>
            <Route path="/" element={<AdminHome />} />
            <Route path="/add-books" element={<AddBook />} />


        </Routes>



    </div>);
}

export default AdminPortal;