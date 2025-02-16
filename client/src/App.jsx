import { Route, Routes } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Categories from "./pages/Categories";
import Liberary from "./pages/Liberary";
import ShopCart from "./pages/ShopCart";
import { ShopContextProvider } from "./context/ShoppingContext";
import { FavorietsContextProvider } from "./context/FavorietsContext";
import { AuthContextProvider } from "./context/authContext";
import ProtectedRoute from "./ui/ProtectedRoute";
import Setting from "./pages/Setting";
import ChangePassword from "./pages/ChangePassword";
import ProtectedAdminRoute from "./ui/ProtectedAdminRoute";
import LayoutAdmin from "./ui/LayoutAdmin";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import EditProducts from "./pages/EditProducts";
import Users from "./pages/Users";
import ProductDetails from "./features/products/ProductDetails";
import Payment from "./pages/Payment";
import Verify from "./pages/Verify";
import OrdersProduct from "./pages/OrdersProduct";
import Orders from "./features/admin/Orders";
import Order from "./features/admin/Order";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ShopContextProvider>
          <FavorietsContextProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/verify" element={<Verify />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/liberary" element={<Liberary />} />
                  <Route path="/shopCart" element={<ShopCart />} />
                  <Route path="/setting" element={<Setting />} />
                  <Route path="/ordersProduct" element={<OrdersProduct />} />
                  <Route path="/changePassword" element={<ChangePassword />} />
                </Route>
              </Route>
              <Route element={<ProtectedAdminRoute />}>
                <Route element={<LayoutAdmin />}>
                  <Route path="/admin" element={<Dashboard />} />
                  <Route path="/addProduct" element={<AddProduct />} />
                  <Route path="/editProducts" element={<EditProducts />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/orders:id" element={<Order />} />
                </Route>
              </Route>
            </Routes>
          </FavorietsContextProvider>
        </ShopContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
