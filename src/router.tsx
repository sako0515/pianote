import { createBrowserRouter } from "react-router";
import PracticeLogsProvider from "./contexts/PracticeLogsProvider";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import GrowthPage from "./pages/GrowthPage";
import HomePage from "./pages/HomePage";
import NotesPage from "./pages/NotesPage";
import NotFoundPage from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PracticeLogsProvider>
        <RootLayout />
      </PracticeLogsProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "notes", element: <NotesPage /> },
      { path: "growth", element: <GrowthPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
