import React, { useEffect ,useReducer} from 'react'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import './LoginForm.css';
// import Form from './Form';
import './Login';
import useLocalStorage from './Hooks/useLocalStorage';



function LoginForm({Login,error}) {
    const[details,setDetails] = useLocalStorage("Login", {name:"" , email: "" , password:""});
    

    const submitHandler = e =>{
    //     Login(details);  
        
    }  
    return (
        <form onSubmit={submitHandler}> 
    
        <div className = ".form-content-left">
            <h2>Login</h2> 
            {(error != "") ? ( <div className="error">{error}</div> ) : ""}
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                 <input type=" name text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})}value={details.name} />
            </div>
            <div className = "form-group">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})}value={details.email}/>
            </div>
            <div className = "form-group">
                <label htmlFor="password">password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})}value={details.password}></input>

            </div>
            <div><button onClick={submitHandler(document)}>Login</button></div>
        </div >
        </form>
    )
}



export default LoginForm;
