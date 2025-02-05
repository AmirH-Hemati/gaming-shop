import { Route, Routes } from "react-router-dom";
import Layout from "./ui/Layout";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CreateProduct from "./pages/CreateProduct";

const queryClient = new QueryClient();
function App() {
 
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/createProduct" element={<CreateProduct />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
