import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import EmployListPage from "./pages/EmployListPage";
import Home from "./pages/Home";
import UpdateEmploy from "./pages/UpdateEmploy";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      // errorElement: <h1>404</h1>,
      children: [
        { index: true, element: <EmployListPage /> },
        { path: "employs", element:  <Home/>},
        { path: "employs/:id", element: <UpdateEmploy /> },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
  // return <div>home</div>
}

export default App;
