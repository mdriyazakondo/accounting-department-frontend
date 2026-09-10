import { createBrowserRouter } from "react-router";

import MainLayout from "../layout/MainLayout";

import HomePage from "../pages/HomePage";
import SitePage from "../pages/SitePage";
import DashboardPage from "../pages/DashboardPage";

import TeacherRegistrationForm from "../auth/Teacher";
import StudentRegistrationForm from "../auth/StudentLogin";
import OfficeAssistantRegistrationForm from "../auth/OfficeAssistantRegistrationForm";
import LoginForm from "../auth/Login";
import AuthLayout from "../layout/AuthLayout";

const router = createBrowserRouter([
  // Main Website
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "*",
        element: <SitePage />,
      },
    ],
  },

  // Auth Pages
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "login/student",
        element: <StudentRegistrationForm />,
      },
      {
        path: "login/teacher",
        element: <TeacherRegistrationForm />,
      },
      {
        path: "login/office-assistant",
        element: <OfficeAssistantRegistrationForm />,
      },
    ],
  },
]);

export default router;
