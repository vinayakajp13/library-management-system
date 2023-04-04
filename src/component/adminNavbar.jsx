import { Link } from 'react-router-dom';
import '../style/adminnav.css'

const AdminNavbar = () => {
    return ( <div>

        <div className="anav">
        <h1>admin Nav</h1>

        <div className='alink'>

        <Link> Dashboard</Link>
<Link>Add-Book</Link>
<Link>Add-user</Link>
<Link>Book List</Link>
        </div>


       
        </div>
    </div> );
}
 
export default AdminNavbar;