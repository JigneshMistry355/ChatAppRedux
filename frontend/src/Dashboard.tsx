import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { login, logout } from "./reducers";
import { useState } from "react";

const Dashboard = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 

    const dispatch: AppDispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const user = useSelector((state: RootState) => state.auth.user);

    const handleLogin = () => {
        const user = { username: 'John', email:'john@example.com'};
        dispatch(login(user));
    };

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <div>
            {
            
                isAuthenticated ? (
                    <div>
                        <h2>Welcome, {user?.username}</h2>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div className="flex">
                        <h2>Click to Login</h2>
                        <button onClick={handleLogin}>Login</button>
                    </div>
                )
            
            }
        </div>
    )
}

export default Dashboard;

