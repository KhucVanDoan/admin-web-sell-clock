import { useRoutes } from "react-router-dom";
import "./App.css";
import AdvisePage from "./pages/AdvisePage";
import Info from "./pages/Info";
import Result from "./pages/Result";
import RulePage from "./pages/RulePage";
import SearchCpu from "./pages/SearchCpu";
import SearchLaptop from "./pages/SearchLaptop";

const routes = [
  {
    path: "/",
    element: <AdvisePage />,
  },
  {
    path: "/ketqua",
    element: <Result />,
  },
  {
    path: "/rule",
    element: <RulePage />,
  },

  {
    path: "/laptop",
    element: <SearchLaptop />,
  },
  {
    path: "/cauhinh",
    element: <SearchCpu />,
  },
  {
    path: "/thongtin",
    element: <Info />,
  },
];

function App() {
  return useRoutes(routes);
}

export default App;
