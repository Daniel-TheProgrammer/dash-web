import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "Работа/Аналитика",
        element: <h2>Hello</h2>,
      },
      {
        path: "Работа/Договоры",
        element: <h2>Hello</h2>,
      },
      {
        path: "Работа/Импорт",
        element: <h2>hello</h2>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
