import * as React from 'react';
import {Link} from "react-router-dom";
import {useForm} from "../../hooks/useForm";

export const RegisterScreen = () => {

    const [ formValues, handleInputChanges , reset ] = useForm({
        name: 'sil',
        email: 'silviosisa@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;



    const handleRegister = (e) => {
        e.preventDefault();
        console.log(name,email, password, password2);
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister} autoComplete="off">
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChanges }
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChanges }
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    autoComplete="new-password"
                    value={ password }
                    onChange={ handleInputChanges }
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    className="auth__input"
                    autoComplete="new-password"
                    value={ password2 }
                    onChange={ handleInputChanges }
                />
                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                    Register
                </button>



            </form>
            <Link
                className=" link"
                to="/auth/login"
            >
                Alredy registered?
            </Link>

        </>
    );
};