import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import ManageBookingPage from "./pages/ManageBooking";
import ThemeProvider from "./providers/ThemeProvider";
import BookingsProvider from "./booking/BookingsProvider";

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/manage-booking', element: <ManageBookingPage /> },
  { path: '*', element: <NotFoundPage /> },
]);


function App() {
  return (
    <ThemeProvider>
      <BookingsProvider>
        <RouterProvider router={router} />
      </BookingsProvider>
    </ThemeProvider>
  );
}

export default App
