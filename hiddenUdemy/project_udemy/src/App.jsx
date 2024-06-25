import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import MainMenu from './components/MainMenu';
import Users from './components/Users'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/home" element={<MainMenu />} />
                <Route path="/usersData" element={<Users />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App; 