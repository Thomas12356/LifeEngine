import { Navigate, Outlet } from 'react-router-dom';

export default function PublicOnlyRoute(){
    const user = localStorage.getItem('user');

    if (user){
        return <Navigate to='/home' replace />;
    }
    return <Outlet/>;
}