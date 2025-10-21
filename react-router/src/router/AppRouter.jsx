import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../templates/MainLayout';
import UsersList from '../pages/UsersList';
import EditUser from "../pages/EditUser";
import CreateUser from "../pages/CreateUser";

const AppRouter = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<h1>Main Page</h1>} />
                    <Route path="/users" element={<UsersList />} />
                    <Route path="/users/create" element={<CreateUser />} />
                    <Route path="/users/:id" element={<EditUser />} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default AppRouter;
