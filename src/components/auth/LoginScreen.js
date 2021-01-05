import React, { Fragment} from 'react';

import { Link } from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import {useDispatch, useSelector} from "react-redux";
import {starGoogleLogin, startLoginEmailPassword} from "../../actions/auth";
export const LoginScreen = () => {

    const dispatch =  useDispatch();

    const { loading } = useSelector( state => state.ui);

    const [ formValues, handleInputChanges  ] = useForm({
        email: 'silviosisa@gmail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
        console.log(email, password);
    }

    const handleGoogleLogin = () => {
        dispatch( starGoogleLogin());
    }

    return (
        <Fragment>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={ handleLogin } autoComplete="off">
                <input type="hidden" value="tdasdasdasest"  autoComplete="on"/>
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
                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    disabled={ loading }
                >
                    Login
                </button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>

                </div>
            </form>
            <Link
                className="mt-5 link"
                to="/auth/register"
            >
                Create new account
            </Link>

        </Fragment>
    );
};