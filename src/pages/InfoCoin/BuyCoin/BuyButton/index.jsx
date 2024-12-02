import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeBuy } from "../../../../redux/slice/buyCoinSlice";
import { addCoinInCase } from "../../../../redux/slice/coinInBriefcaseSlice";
import { selectBuy, selectCoin } from "../../../../redux/selectors";

const BuyButton = () => {
  const dispatch = useDispatch();
  const buy = useSelector(selectBuy);
  const { coin } = useSelector(selectCoin);

  const handleClick = () => {
    if (typeof buy === "number" && !isNaN(buy) && buy !== 0 ) {
      dispatch(addCoinInCase({ ...coin, count: buy }));
      dispatch(removeBuy());
    }
  };

  return (
    <Button
      variant="outlined"
      color="secondary"
      sx={{
        color: "#c92d82",
        borderColor: "#c92d82",
        marginLeft: "20px",
        marginTop: "20px",
        marginBottom: "20px",
        fontSize: {
          xs: "12px",
          sm: "14px",
          md: "16px",
        },
      }}
      onClick={handleClick}
    >
      Купить
    </Button>
  );
};
export default BuyButton;
