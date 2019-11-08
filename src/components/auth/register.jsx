import React, { useRef, useContext } from 'react';
import { FirebaseContext } from '../firebase';
import './auth.scss';

const Register = () => {
    const { createUser, user } = useContext(FirebaseContext);
    const emailRef = useRef(null);
    const firstnameRef = useRef(null);
    const lastnameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        createUser(payload)
            .then(authUser => {
                console.log('Created user', authUser);

                // Create a user in your Firebase realtime database
                return user(authUser.user.uid).set({
                    firstname: firstnameRef.current.value,
                    email: emailRef.current.value,
                    lastname: lastnameRef.current.value
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="card--root">
            <div className="card--container">
                <h1>Register</h1>
                <form className="register-form" onSubmit={handleSubmit}>
                    <input
                        ref={emailRef}
                        className="register-form__field"
                        placeholder="Email"
                        type="email"
                    />
                    <input
                        ref={firstnameRef}
                        className="register-form__field"
                        placeholder="First Name"
                        type="text"
                    />
                    <input
                        ref={lastnameRef}
                        className="register-form__field"
                        placeholder="Last Name"
                        type="text"
                    />
                    <input
                        ref={passwordRef}
                        className="register-form__field"
                        placeholder="Password"
                        type="password"
                    />
                    <button type="submit" className="register-form__button">
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
