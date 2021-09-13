import React from 'react';
import { useForm } from "react-hook-form"
import '../App.css';


const Login = () => {

    const { register, handleSubmit,formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        console.log("Traitement exécuté" ,data);
    }

    return (
        <div>
            <h1>Login</h1>

            <div className="all-input">
                <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="username "
                    {...register('username', { required: "Veuillez renseigner le champ 'description'", maxLengt: "15" })}
                    placeholder="Username"
                    type="text"
                />
                {errors.username && <span>Ecrit bien</span>}
                <input
                    name="password "
                    {...register('password', { required: "Veuillez renseigner le champ 'description'", minLengt: "6" })}
                    placeholder="Password"
                    type="password"
                />
                {errors.password && <span>Attend tu connais pas ton mdp</span>}
                <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Login;