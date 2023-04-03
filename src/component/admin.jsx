import '../style/admin.css'
const Admin = () => {
    return (<div className='admin'>

        <div className="login">
            <img src="/image/Profile.png" alt="" />
            <h1>Admin Login</h1>

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
    </div>);
}

export default Admin;