import { Route, Routes } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CreateProduct from "./pages/CreateProduct";
import Categories from "./pages/Categories";
import Liberary from "./pages/Liberary";
import ShopCart from "./pages/ShopCart";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/liberary" element={<Liberary />} />
          <Route path="/shopCart" element={<ShopCart />} />
          <Route path="/createProduct" element={<CreateProduct />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
