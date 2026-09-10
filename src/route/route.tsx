import { createBrowserRouter } from "react-router";

import MainLayout from "../layout/MainLayout";

import TeacherRegistrationForm from "../auth/Teacher";
import StudentRegistrationForm from "../auth/StudentLogin";
import OfficeAssistantRegistrationForm from "../auth/OfficeAssistantRegistrationForm";
import LoginForm from "../auth/Login";
import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashbordLyaout";
import Homepage from "../pages/HomePage";

const router = createBrowserRouter([
  // Main Website
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },

  // Auth Pages
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [],
  },
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
