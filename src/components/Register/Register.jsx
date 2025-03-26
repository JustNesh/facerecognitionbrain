import React, {useState} from "react";
import "./Register.css"
import validateEmail from "../../functionality/emailValidation";

export default function Register({setUser, onRouteChange}){
    const [nameField, setNameField] = useState('')
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('')
    const [boolFieldObject, setBoolFieldObject] = useState({
        nameField: false,
        emailField: false,
        passwordField: false
    })
    
    function onNameChange(event) {
        setNameField(event.target.value);
        if (event.target.value.length > 1) {
            setBoolFieldObject({...boolFieldObject,nameField:true})
        }
    }

    function onEmailChange(event) {
        setEmailField(event.target.value);
        if (event.target.value.length > 1 && validateEmail(event.target.value)) {
            setBoolFieldObject({...boolFieldObject,emailField:true})
        }        
    }

    function onPasswordChange(event) {
        setPasswordField(event.target.value);
        if (event.target.value.length > 1) {
            setBoolFieldObject({...boolFieldObject,passwordField:true})
        }    
    }
    
    function onSubmit() {
        fetch("http://localhost:3000/register", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: nameField,
                email: emailField,
                password: passwordField
            })

        }).then(response => response.json()).then(data => {
            if (data.response === "Success") {
                setUser({
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    joinDate: data.joinDate,
                    entries: data.entries
                })
                onRouteChange('home')
            } else if (data.response === "Unable to Register") {
                alert("Unable to Register, Try Again")
            }
        }).catch((err) => {throw err})
    }

    return (
        <article className="br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
            <main className="pa4 black-80">
            <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Registration</legend>
                <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={onNameChange} type="name" name="name"  id="name" required/>
                </div>                
                <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={onEmailChange} type="email" name="email-address"  id="email-address" required/>
                </div>
                <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={onPasswordChange} type="password" name="password"  id="password" required/>
                </div>
            </fieldset>
            <div className="">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register!" onClick={(boolFieldObject.nameField&&boolFieldObject.passwordField&&boolFieldObject.emailField)?onSubmit:()=>alert("Please fill out the form!")}/>
            </div>
            </div>
        </main>
        </article>
)
}