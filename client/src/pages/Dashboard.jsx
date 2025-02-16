import Piechart from "../ui/PieChart";
import SaleChart from "../ui/SaleChart";
import Stats from "../ui/Stats";

function Dashboard() {
  return (
    <div className="w-full h-full mt-6 flex flex-col gap-4 justify-between">
      <Stats />
      <h2 className="font-semibold text-xl text-black">محصولات پر فروش</h2>
      <Piechart />
      <h2 className="font-semibold text-xl text-black">محصولات فروخته شده </h2>
      <SaleChart />
    </div>
  );
}

export default Dashboard;
