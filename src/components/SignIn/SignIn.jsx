import React, { useState } from "react";
import './SignIn.css'

export default function SingIn({setUser, onRouteChange}) {
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('')
    // const [successfulLogin, setSuccessfulLogin] = useState(false)
    
    function onEmailChange(event) {
        setEmailField(event.target.value);
    }

    function onPasswordChange(event) {
        setPasswordField(event.target.value);
    }
    
    function onSubmit() {
        fetch("http://localhost:3000/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: emailField,
                password: passwordField
            })

        }).then(response => response.json()).then(data => {
            if (data.response === 200) {
                setUser({
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    entries: data.entries,
                    joinDate: data.joinDate
                })
                onRouteChange('home')
            } else if (data.response === 404) {
                alert(data.responseReason)
            }
        }).catch((err) => { throw err})
    }

    return (
        <article className="br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
            <main className="pa4 black-80">
            <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={onEmailChange} />
                </div>
                <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={onPasswordChange} />
                </div>
            </fieldset>
            <div className="">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={onSubmit}/>
            </div>
            <div className="lh-copy mt3">
                <p onClick={()=> onRouteChange("registerPage") } className="f6 link dim black db pointer">Register</p>
            </div>
            </div>
        </main>
      </article>
    )
}