import { Add, Minus, Trash } from "iconsax-react";
import { useAddToCart } from "../context/ShoppingContext";
import { Button } from "@mui/material";

function ButtonAddToCarts({ product }) {
  const { handelIncreaseProduct, handelDecreaseProduct, getProductQty } =
    useAddToCart();
  return (
    <div className="w-full flex gap-2 items-center">
      <Button
        className="w-1/2"
        variant="contained"
        type="submit"
        sx={{ backgroundColor: "#0998a8", padding: "12px" }}
        onClick={() => handelDecreaseProduct(product._id)}
      >
        {getProductQty(product._id) > 1 ? (
          <Minus size="24" color="#fff" />
        ) : (
          <Trash size="24" color="#fff" />
        )}
      </Button>
      <p className="text-lg font-semibold">{getProductQty(product._id)}</p>
      <Button
        className="w-1/2"
        variant="contained"
        type="submit"
        sx={{ backgroundColor: "#0998a8", padding: "12px" }}
        onClick={() => handelIncreaseProduct(product._id)}
      >
        <Add size="24" color="#fff" />
      </Button>
    </div>
  );
}

export default ButtonAddToCarts;
