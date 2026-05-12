import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from '@features/auth/utils/authService';
import LoginForm from "@/features/auth/components/LoginForm";

export default function LoginPage(){
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function handleLoginAttempt(credentials){
        try{
            const user = await loginUser(credentials)
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/home');
        } catch (err) {
            setError(err.response?.data?.msg || 'Invalid Credentials');
        }
    }

    return (
        <div>
            <h1>Log In Page</h1>
            <LoginForm onSubmit={handleLoginAttempt} error={error} />
        </div>
    )
}