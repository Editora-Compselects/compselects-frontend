import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { NavBar } from '../components/general/NavBar';
import { Footer } from '../components/general/Footer';
import { useEffect } from 'react';

export default function Layout() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/home', { replace: true });
        }
        }, [location, navigate]);
        
    return (
        <>
        <NavBar />
        <Outlet />
        <Footer />
        </>
    );
}