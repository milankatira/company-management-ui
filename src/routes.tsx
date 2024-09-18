import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/login';
import ListCompaniesPage from './pages/ListCompaniesPage';
import CompanyPage from './pages/CompanyPage';
import AddCompanyPage from './pages/AddCompanyPage';

function RoutesWrapper() {
    // // State to track authentication
    // const [isAuthenticated, setIsAuthenticated] = useState(
    //     localStorage.getItem('authenticated') === 'true'
    // );

    // Function to handle login (for demo purposes)
    // const handleLogin = () => {
    //     localStorage.setItem('authenticated', 'true');
    //     setIsAuthenticated(true);
    // };

    // Function to handle logout
    // const handleLogout = () => {
    //     localStorage.removeItem('authenticated');
    //     setIsAuthenticated(false);
    // };
    const isAuthenticated = localStorage.getItem('token');

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={isAuthenticated ? <Navigate to="/companies" /> : <Navigate to="/login" />}
                />

                {/* Public Route: Login Page */}
                <Route path="/login" element={<LoginPage />} />

                <Route
                    path="/companies"
                    element={isAuthenticated ? <ListCompaniesPage /> : <Navigate to="/login" />}

                />
                <Route
                    path="/companies/:companyId"
                    element={isAuthenticated ? <CompanyPage /> : <Navigate to="/login" />}
                />
                <Route
                    path="/add-company"
                    element={isAuthenticated ? <AddCompanyPage /> : <Navigate to="/login" />}
                />

                {/* Protected Routes */}
                <Route
                    path="/companies"
                    element={isAuthenticated ? <ListCompaniesPage /> : <Navigate to="/login" />}
                />
            </Routes>
        </Router>
    );
}

export default RoutesWrapper;
