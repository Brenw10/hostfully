import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import ManageBookingPage from "./pages/ManageBooking";

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/manage-booking', element: <ManageBookingPage /> },
  { path: '*', element: <NotFoundPage /> },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
