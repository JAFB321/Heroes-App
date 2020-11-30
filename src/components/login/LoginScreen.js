import React from 'react'
import { AuthContext } from '../../auth/AuthContext'
import {useContext} from 'react'
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
    
    const {user, dispatch} = useContext(AuthContext);
    const lastPath = localStorage.getItem('lastPath') || '/';

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Jose Antonio'
            }
        }
        dispatch(action);
        history.replace(lastPath); 
        // history.push('/'); // Navega a otra ruta 
    }

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <hr />

            <button className="btn btn-primary"
            onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}
