import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { TableView } from "./views/tables";

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
        element: <TableView />,
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
