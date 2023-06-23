import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Policy = lazy(() => import("./pages/Policy"));
const Pagenotfound = lazy(() => import("./pages/Pagenotfound"));
const Register = lazy(() => import("./pages/Auth/Register"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Dashboard = lazy(() => import("./pages/user/Dashboard"));
const PrivateRoute = lazy(() => import("./components/Routes/Private"));
const ForgotPasssword = lazy(() => import("./pages/Auth/ForgotPasssword"));
const AdminRoute = lazy(() => import("./components/Routes/AdminRoute"));
const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard"));
const CreateCategory = lazy(() => import("./pages/Admin/CreateCategory"));
const CreateProduct = lazy(() => import("./pages/Admin/CreateProduct"));
const Users = lazy(() => import("./pages/Admin/Users"));
const Orders = lazy(() => import("./pages/user/Orders"));
const Profile = lazy(() => import("./pages/user/Profile"));
const Products = lazy(() => import("./pages/Admin/Products"));
const UpdateProduct = lazy(() => import("./pages/Admin/UpdateProduct"));
const Search = lazy(() => import("./pages/Search"));
const Categories = lazy(() => import("./pages/Categories"));
const CategoryProduct = lazy(() => import("./pages/CategoryProduct"));
const CartPage = lazy(() => import("./pages/CartPage"));
const AdminOrders = lazy(() => import("./pages/Admin/AdminOrders"));

const ProductDetails = lazy(() => import("./pages/ProductDetails"));

function App() {
  return (
    <>
      <Suspense fallback={""}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/category/:slug" element={<CategoryProduct />} />
          <Route path="/search" element={<Search />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard />} />
            <Route path="user/orders" element={<Orders />} />
            <Route path="user/profile" element={<Profile />} />
          </Route>
          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/create-category" element={<CreateCategory />} />
            <Route path="admin/create-product" element={<CreateProduct />} />
            <Route path="admin/product/:slug" element={<UpdateProduct />} />
            <Route path="admin/products" element={<Products />} />
            <Route path="admin/users" element={<Users />} />
            <Route path="admin/orders" element={<AdminOrders />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPasssword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
