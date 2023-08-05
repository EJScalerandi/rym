import React, { useState } from "react";
import validation from './validation';
import Styles from './Form.module.css';


// import { Link } from "react-router-dom";

let myError = Styles.myError;
let fondo = Styles.fondo;

const Form = ({ login })=>{

    let [userData, setUserData] = useState({
        username: '',
        password: '' 
    });
    const [errors, setErrors] = useState({
        username: '', 
        password: '' 
    });

    let handleImputChange=(e)=>{
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })

        setErrors(
            validation({
                ...userData,
                [e.target.name] : e.target.value
            })
        );
    }
    let handleSubmit=()=>{
        login(userData);
    }

    return(
        <div className="fondo">
            <form onSubmit={handleSubmit}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnhF6yaeXHsdbMMgPtbA2ieKYKHcgwMRQFA&usqp=CAU"></img>
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    placeholder="Dirección de E-mail" 
                    name="username" 
                    value={userData.username} 
                    onChange={handleImputChange}
                    className={errors.username && myError }
                />
        
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    name="password" 
                    value={userData.password} 
                    onChange={handleImputChange}
                    className={errors.password && myError }
                />
        
                <button>Submit</button>
                <button onClick={(e)=>{
                    e.preventDefault();
                    alert('BIENVENIDOS!!')
                }} >Register</button>
            </form>
        </div>
    );
}

export default Form;