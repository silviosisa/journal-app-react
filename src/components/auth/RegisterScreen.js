import * as React from 'react';
import {Link} from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import validator from 'validator';
import {useDispatch} from "react-redux";
import {removeError, setError} from "../../actions/ui";

export const RegisterScreen = () => {

    const dispatch =  useDispatch();

    const [ formValues, handleInputChanges , reset ] = useForm({
        name: 'sil',
        email: 'silviosisa@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;



    const handleRegister = (e) => {
        e.preventDefault();
       if( ifFormValid()){
        console.log('Formulario correcto');
       }
    }

    const ifFormValid = () => {
        if(name.trim().length === 0){
            console.log('name is required');
            dispatch(setError('name is required'));
            return false;
        } else if ( !validator.isEmail(email)){
            console.log('Email is not valid');
            dispatch(setError('Email is not valid'));
            return false;
        } else if ( password !== password2 || password.length < 5){
            console.log('Password should be at least 6 characters and mactch each other');
            dispatch(setError('Password should be at least 6 characters and mactch each other'));
            return false
        }
        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister} autoComplete="off">
                <div className="auth__alert-error">
                    Hola Mundo
                </div>
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