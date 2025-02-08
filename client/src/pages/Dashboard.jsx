import { ShoppingBag } from "iconsax-react";
import Stat from "../ui/Stat";

function Dashboard() {
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        <Stat
          title={`محصولات`}
          value={"255"}
          icon={<ShoppingBag size="32" color="#192938" />}
          color={`#E0F2FE`}
        />
        <Stat
          title={`کاربران`}
          value={"255"}
          icon={<ShoppingBag size="32" color="#192938" />}
          color={`#DCFCE7`}
        />
        <Stat
          title={`فروش`}
          value={"255,874"}
          icon={<ShoppingBag size="32" color="#192938" />}
          color={`#FEF9C3`}
        />
        <Stat
          title={`محصولات`}
          value={"255"}
          icon={<ShoppingBag size="32" color="#192938" />}
          color={`#E0F2FE`}
        />
      </div>
    </div>
  );
}

export default Dashboard;
