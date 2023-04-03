import '../style/home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='home'>

            <div className="sign">
                <h1>SIGN IN</h1>
                <br />
                

                <div className="link">
                    <Link to="/admin-login">Admin Login</Link>
                    <Link to="/user-login">User Login</Link>
                </div>
            </div>



        </div>);
}

export default Home;