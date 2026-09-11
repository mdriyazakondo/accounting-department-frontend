import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./route/route.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner"; // 1. Sonner Import করুন

// Create Query Client instance
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* 2. RouterProvider-এর সাথে বা বাইরে Toaster টি বসিয়ে দিন */}
      <Toaster position="top-center" richColors closeButton />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
