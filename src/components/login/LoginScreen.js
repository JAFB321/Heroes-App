import React from 'react'
import { AuthContext } from '../../auth/AuthContext'
import {useContext} from 'react'
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
    
    const {user, dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Jose Antonio'
            }
        }
        dispatch(action);
        // history.push('/'); // Navega a otra ruta 
        history.replace('/'); // Reemplaza en la historia la ruta actual (lo que te reedirecciona a la nueva ruta y reemplaza la ruta anterior como si no se hubiera accedido a ella)
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
