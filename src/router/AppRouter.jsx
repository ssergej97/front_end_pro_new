import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../templates/MainLayout.jsx';
import MainPage from '../pages/MainPage.jsx';
import TaskDetail from '../pages/TaskDetail.jsx';
const AppRouter = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/tasks/:id" element={<TaskDetail />} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default AppRouter;
