import { useRoutes } from "react-router-dom";
import "./App.css";
import AdvisePage from "./pages/AdvisePage";
import LaptopPage from "./pages/LaptopPage";
import RulePage from "./pages/RulePage";

const routes = [
  {
    path: "/",
    element: <AdvisePage />,
  },
  {
    path: "/laptop",
    element: <LaptopPage />,
  },
  {
    path: "/rule",
    element: <RulePage />,
  },
];

function App() {
  return useRoutes(routes);
}

export default App;
