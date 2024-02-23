import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import ManageBookingPage from "./pages/ManageBooking";
import ThemeProvider from "./providers/ThemeProvider";

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/manage-booking', element: <ManageBookingPage /> },
  { path: '*', element: <NotFoundPage /> },
]);


function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App
