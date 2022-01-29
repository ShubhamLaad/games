import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React from 'react';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Root from '../components/Root/Root';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route
          path="/"
          element={<DashboardPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  </BrowserRouter >
);

export default AppRoutes;