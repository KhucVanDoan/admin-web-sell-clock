import { useRoutes } from "react-router-dom";
import "./App.css";
import AdvisePage from "./pages/AdvisePage";
import LaptopPage from "./pages/LaptopPage";

const routes = [
  {
    path: "/",
    element: <AdvisePage />,
  },
  {
    path: "/laptop",
    element: <LaptopPage />,
  },
];

function App() {
  return useRoutes(routes);
}

export default App;
