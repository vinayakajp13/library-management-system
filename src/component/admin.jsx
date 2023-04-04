import '../style/admin.css'
import { useRef} from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {

    let navigate = useNavigate()
    let email = useRef(null);
    let password = useRef(null);

    //validating admin cridential
    let submit = () => {

       

        if (email.current.value == "Vinay058@gmail.com" && password.current.value == 12345) {

          navigate("/admin-portal")
            alert("Welcome admin")
        }
        else {
            alert("enter the currect values")
        }

    }



    return (<div className='admin'>

        <div className="login">
            <form action="" onSubmit={submit}>
                <img src="/image/Profile.png" alt="" />
                <h1>Admin Login</h1>

                <br />

                <label > Email: </label>
                <input ref={email} type="text" name="" id="a" placeholder='Enter Your Email' />
                <br />
                <br />
                <label > Password: </label>
                <input ref={password} type="password" name="" id="" placeholder='Enter Your Password' />
                <br />
                <button >Login</button>
            </form>



        </div>
    </div>);
}

export default Admin;