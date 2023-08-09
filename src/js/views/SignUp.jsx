import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { Context } from '../store/appContext';

const SignUp = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();


    async function submitLogInCredentials(e) {
        e.preventDefault();
        let register = await actions.getSignUp(email, password);
        console.log(register);
        if (register) {
            //true
            navigate('/signupform');
        }
        else {
            alert("User already exist");
            navigate('/login');
        }
    }



    // function redirectToLogin() {
    //     setTimeout(() => {
    //         window.location.href = '/login';
    //     }, 1000);
    // }

    return (
        <div className="text-center mb-4 mx-auto" style={{ marginTop: '8rem' }}>
            
                <h1>SIGN UP</h1>
            
            <div className="mx-auto" style={{ width: '50rem' }}>
                <form onSubmit={submitLogInCredentials}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div
                            id="emailHelp"
                            className="form-text"
                            style={{ color: 'rgb(239, 145, 109)' }}
                        >
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div> */}
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    {/* <button onClick={redirectToLogin} style={{ cursor: 'pointer' }} type="submit" className="btn btn-warning  mx-auto m-3">
                        Create account
                    </button> */}
                </form>
            </div>
        </div>
    );
};

export default SignUp;

