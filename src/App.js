import { useRoutes } from "react-router-dom";
import "./App.css";
import AdvisePage from "./pages/AdvisePage";
import RulePage from "./pages/RulePage";
import SearchCpu from "./pages/SearchCpu";
import SearchLaptop from "./pages/SearchLaptop";

const routes = [
  {
    path: "/",
    element: <AdvisePage />,
  },
  // {
  //   path: "/laptop",
  //   element: <LaptopPage />,
  // },
  {
    path: "/rule",
    element: <RulePage />,
  },

  {
    path: "/laptop",
    element: <SearchLaptop />,
  },
  {
    path: "/cpu",
    element: <SearchCpu />,
  },
];

function App() {
  return useRoutes(routes);
}

export default App;
