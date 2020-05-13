import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

export default function Form(props) {
        const [user, setUser] = useState({
            name: "",
            email: "",
            password: "",
            terms: false
        });
    
        const changeHandler = e => {
            setUser({...user, [e.target.name]: e.target.value});
            console.log(user);
        };
    
        const submitForm = e => {
            e.preventDefault();
            props.addUser(user);
            setUser({name:"", email:"", password:"", terms:false});
        };
        
    
        return (
            <form className="form" onSubmit={submitForm}>
                <label htmlFor="name">Name </label>
                <input 
                    onChange={changeHandler}
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    required
                    value={user.name}
                />
                <br/>
    
                <label htmlFor="email">Email </label>
                <input 
                    onChange={changeHandler}
                    id="email"
                    type="text"
                    name="email"
                    placeholder="jsmith@example.com"
                    required
                    value={user.email}
                />
                <br/>
                
                <label htmlFor="password">Password </label>
                <input 
                    onChange={changeHandler}
                    id="password"
                    type="password"
                    name="password"
                    placeholder="password"
                    minlength="8"
                    required
                    value={user.password}
                />
                <br/>

                <label htmlFor="terms">I have read and accept the Terms and Conditions.</label>
                <input 
                    onChange={changeHandler}
                    id="terms"
                    type="checkbox"
                />
                
                <button type="submit">Submit</button>
    
            </form>
    
    
        );
    
        
    
    
    }
