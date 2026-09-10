import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import SitePage from "../pages/SitePage";
import DashboardPage from "../pages/DashboardPage";
import TeacherRegistrationForm from "../auth/Teacher";
import StudentRegistrationForm from "../auth/StudentLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "*", element: <SitePage /> },
      {
        path: "/login/student",
        element: <StudentRegistrationForm />,
      },
      {
        path: "/login/teacher",
        element: <TeacherRegistrationForm />,
      },
    ],
  },
]);

export default router;
