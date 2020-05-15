import React, { useState, useEffect } from "react";
import * as yup from "yup";


export default function Form(props) {
        const [formState, setFormState] = useState({
            name: "",
            email: "",
            password: "",
            terms: false
        });
    
        const submitForm = e => {
            e.preventDefault();
            props.addUser(formState);
            setFormState({name:"", email:"", password:"", terms:false});
        };

        const formSchema = yup.object().shape({
            name: yup.string().required("Name is a required field"),
            email: yup
              .string()
              .email("Must be a valid email address")
              .required("Must include email address"),
            password: yup
                .string()
                .required("Must include a password")
                .min(5)
                .max(16),
            terms: yup.boolean().oneOf([true], "Please agree to terms of use")
          });

        const [errorState, setErrorState] = useState({
            name: "",
            email: "",
            motivation: "",
            position: "",
            terms: ""
          });
        
        const validate = e => {
            let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
            yup
                .reach(formSchema, e.target.name)
                .validate(value)
                .then(valid => {
                    setErrorState({
                        ...errorState,
                        [e.target.name]: ""
                      });
                })
                .catch(err => {
                    setErrorState({
                      ...errorState,
                      [e.target.name]: err.errors[0]
                    });
                  });
        };

        const inputChange = e => {
            e.persist();
            // console.log("input changed!", e.target.value, e.target.checked);
            validate(e);
            let value =
              e.target.type === "checkbox" ? e.target.checked : e.target.value;
            setFormState({ ...formState, [e.target.name]: value });
          };
    
        return (
            <form className="form" onSubmit={submitForm}>
                <label htmlFor="name">Name: </label>
                <input 
                    onChange={inputChange}
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    required
                    value={formState.name}
                />
                <br/>
    
                <label htmlFor="email">Email: </label>
                <input 
                    onChange={inputChange}
                    id="email"
                    type="text"
                    name="email"
                    placeholder="jsmith@example.com"
                    required
                    value={formState.email}
                />
                <br/>
                
                <label htmlFor="password">Password: </label>
                <input 
                    onChange={inputChange}
                    id="password"
                    type="password"
                    name="password"
                    placeholder="password"
                    minlength="8"
                    required
                    value={formState.password}
                />
                <br/>

                <label htmlFor="terms">I have read and accept the Terms and Conditions. </label>
                <input 
                    onChange={inputChange}
                    id="terms"
                    type="checkbox"
                />

                <br />

                <div className="button-holder">
                    <button type="submit">Submit</button>
                </div>
                
    
            </form>
    
    
        );
    
        
    
    
    }
