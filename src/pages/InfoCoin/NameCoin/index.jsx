import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCoin } from "../../../redux/selectors";
import { styles } from "./indexStyle";

const NameCoin = () => {
  const { coin } = useSelector(selectCoin);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.nameSymbol}>{coin.symbol}</Box>
      <Box sx={styles.name}>{coin.name}</Box>
    </Box>
  );
};
export default NameCoin;
