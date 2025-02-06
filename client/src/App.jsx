import { Route, Routes } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CreateProduct from "./pages/CreateProduct";
import Categories from "./pages/Categories";
import Liberary from "./pages/Liberary";
import ShopCart from "./pages/ShopCart";
import { ShopContextProvider } from "./context/ShoppingContext";
import { FavorietsContextProvider } from "./context/FavorietsContext";
import { AuthContextProvider } from "./context/authContext";
import ProtectedRoute from "./ui/ProtectedRoute";
import Setting from "./pages/Setting";
import ChangePassword from "./pages/ChangePassword";

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
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/categories" element={<Categories />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/liberary" element={<Liberary />} />
                  <Route path="/shopCart" element={<ShopCart />} />
                  <Route path="/setting" element={<Setting />} />
                  <Route path="/changePassword" element={<ChangePassword />} />
                </Route>
                <Route path="/createProduct" element={<CreateProduct />} />
              </Route>
            </Routes>
          </FavorietsContextProvider>
        </ShopContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
