import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenCoinPurchase } from "../../redux/slice/isOpenCoinPurchaseModalSlice";
import { removeBuy, setBuy } from "../../redux/slice/buyCoinSlice";
import CloseIcon from "@mui/icons-material/Close";
import { addCoinInCase } from "../../redux/slice/coinInBriefcaseSlice";
import {
  selectIsOpenCoinPurchase,
  selectCoin,
  selectBuy,
} from "../../redux/selectors";
import {styles} from "./indexStyle";

const CoinPurchaseModal = () => {
  const dispatch = useDispatch();
  const isOpenCoinPurchase = useSelector(selectIsOpenCoinPurchase);
  const { coin } = useSelector(selectCoin);
  const buy = useSelector(selectBuy);

  const closeModal = () => {
    dispatch(setIsOpenCoinPurchase(!isOpenCoinPurchase));
    dispatch(removeBuy());
  };
  const handleChange = (e) => {
    const newValue = e.target.value;
    // Устанавливаем только если это цифры
    if (/^\d*$/.test(newValue)) {
      dispatch(setBuy(+newValue));
    }
  };
  const handleClick = () => {
    if (typeof buy === "number" && !isNaN(buy) && buy !== 0) {
      dispatch(addCoinInCase({ ...coin, count: buy }));
      dispatch(removeBuy());
      dispatch(setIsOpenCoinPurchase(!isOpenCoinPurchase));
    }
  };

  return (
    <Dialog
      open={isOpenCoinPurchase}
      onClose={closeModal}
      fullWidth
      maxWidth="sm"
      closeAfterTransition={false}
      sx={styles.dialog}
    >
      <IconButton onClick={closeModal} color="error" sx={styles.icon}>
        <CloseIcon />
      </IconButton>
      <DialogTitle sx={styles.title}>
        Купить
        <Typography sx={styles.name}>{coin.name}</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={styles.count}>
          Введите количество:
        </DialogContentText>
        <TextField
          color="secondary"
          sx={styles.input}
          value={buy}
          onChange={handleChange}
          placeholder="Введите только цифры"
        ></TextField>
      </DialogContent>
      <DialogActions sx={styles.actions}>
        <Button
          variant="outlined"
          color="secondary"
          sx={styles.button}
          onClick={handleClick}
        >
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default CoinPurchaseModal;
