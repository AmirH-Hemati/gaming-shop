import { useGetAllOrders } from "../features/admin/useGetAllOrders";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function Piechart() {
  const { orders } = useGetAllOrders();
  const data = orders?.data?.map((p) => p.products)?.flat();
  const formatData = data?.reduce((acc, product) => {
    const existingProduct = acc?.find((p) => p.title == product.title);
    if (existingProduct) {
      existingProduct.qty += parseInt(product.qty);
    } else {
      acc.push({ title: product.title, qty: parseInt(product.qty) });
    }
    return acc;
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={formatData}
          dataKey="qty"
          nameKey="title"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {formatData?.map((entry, index) => (
            <Cell key={`${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          verticalAlign="middle"
          align="right"
          width="30%"
          layout="vertical"
          iconSize={15}
          iconType="circle"
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default Piechart;
