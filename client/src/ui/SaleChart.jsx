import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { useGetAllOrders } from "../features/admin/useGetAllOrders";

function SaleChart() {
  const { orders } = useGetAllOrders();
  const data = orders?.data?.map((p) => ({
    date: new Date(p.createdAt).toLocaleString("fa-IR"),
    amount: p.amount,
  }));
  return (
    <ResponsiveContainer width={`100%`} height={350}>
      <AreaChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray={4} />
        <Area
          type="monotone"
          dataKey="amount"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default SaleChart;
