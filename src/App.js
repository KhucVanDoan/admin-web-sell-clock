import { useRoutes } from "react-router-dom";
import "./App.css";
import AdvisePage from "./pages/AdvisePage";
import CreateCategory from "./pages/category/form-category/create-form";
import EditCategory from "./pages/category/form-category/edit-category";
import ShowCategory from "./pages/category/form-category/show-category";
import Category from "./pages/category/index";
import Info from "./pages/Info";
import Product from "./pages/products";
import CreateProduct from "./pages/products/form-products/create-form";
import DetailProduct from "./pages/products/form-products/detail-product";
import EditProduct from "./pages/products/form-products/edit-product";
import Result from "./pages/Result";
import RulePage from "./pages/RulePage";
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
    path: "/category",
    element: <Category />,
  },
  {
    path: "/category/create",
    element: <CreateCategory />,
  },
  {
    path: "/category/edit/:id",
    element: <EditCategory />,
  },
  {
    path: "/category/detail/:id",
    element: <ShowCategory />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "/products/create",
    element: <CreateProduct />,
  },
  {
    path: "/products/edit/:id",
    element: <EditProduct />,
  },
  {
    path: "/products/detail/:id",
    element: <DetailProduct />,
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
