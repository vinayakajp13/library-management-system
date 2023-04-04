import '../style/user.css';
const User = () => {
    return ( <div className='user'>
       <div className="ulogin">
            <img src="/image/Profile.png" alt="" />
            <h1>User Login</h1>

            <br />

            <label > Name: </label>
            <input type="text" name="" id="a" placeholder='Enter Your Name' />
            <br />
            <br />

            <label > Email: </label>
            <input type="text" name="" id="a" placeholder='Enter Your Email' />
            <br />
            <br />
            <label > Password: </label>
            <input type="password" name="" id="" placeholder='Enter Your Password' />
            <br />
            <button>Login</button>



        </div>
    </div> );
}
 
export default User;