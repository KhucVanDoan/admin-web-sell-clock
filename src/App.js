import { useRoutes } from "react-router-dom";
import "./App.css";
import Accout from "./pages/accout";

import CreateCategory from "./pages/category/form-category/create-form";
import EditCategory from "./pages/category/form-category/edit-category";
import ShowCategory from "./pages/category/form-category/show-category";
import Category from "./pages/category/index";
import Dashboard from "./pages/dashboard";
import SaleOrder from "./pages/saleOrder";
import Product from "./pages/products";
import CreateProduct from "./pages/products/form-products/create-form";
import DetailProduct from "./pages/products/form-products/detail-product";
import EditProduct from "./pages/products/form-products/edit-product";
const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/accout",
    element: <Accout />,
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
    path: "/saleorder",
    element: <SaleOrder />,
  },
];

function App() {
  return useRoutes(routes);
}

export default App;
