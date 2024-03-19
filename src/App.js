import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

// Create a router using the createBrowserRouter function from the react-router-dom library.
const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/forgot-password', element: <ForgotPassword /> },
    { path: '/reset-password', element: <ResetPassword /> }
]);

// The main App component that provides the router for the entire application.
function App() {
  return <RouterProvider router={router} />
}

export default App;
