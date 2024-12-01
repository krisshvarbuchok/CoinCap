import { Box, Input, Typography } from "@mui/material";
import BuyButton from "./BuyButton";
import { useDispatch, useSelector } from "react-redux";
import { setBuy } from "../../../redux/slice/buyCoinSlice";
import { selectBuy } from "../../../redux/selectors";
import { styles } from "./indexStyle";

const BuyCoin = () => {
  const dispatch = useDispatch();
  const buy = useSelector(selectBuy);

  const handleChange = (e) => {
    const newValue = e.target.value;
    // Устанавливаем только если это цифры
    if (/^\d*$/.test(newValue)) {
      dispatch(setBuy(+newValue));
    }
  };

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.text}>Введите количество:</Typography>
      <Input
        color="secondary"
        sx={styles.input}
        value={buy}
        onChange={handleChange}
        placeholder="Введите только цифры"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      />
      <BuyButton />
    </Box>
  );
};
export default BuyCoin;
