import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import HelloPage from "../pages/HelloPage";
import UsersPage from "../users/Users"
import UsersForTest from "../components/UsersForTest/UsersForTest";
import UsersDetailesPage from "../pages/UsersDetailesPage";
import ErrorPage from "../pages/ErrorPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/hello" element={<HelloPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users-test" element={<UsersForTest />} />
            <Route path="/users/:id" element={<UsersDetailesPage />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
};

export default AppRouter;
