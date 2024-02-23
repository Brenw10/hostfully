import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import CreateBooking from "./pages/CreateBooking";
import ThemeProvider from "./providers/ThemeProvider";
import BookingsProvider from "./booking/BookingsProvider";

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/booking', element: <CreateBooking /> },
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
