import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.js'
import LoginPage from './pages/LoginPage.js'
import UserPage from './pages/UserPage.js'

export default function Router() {
    return <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
creata        <Route path='/user' element={<UserPage />} />
    </Routes>
}
