import {
  Dialog,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenBriefcase } from "../../redux/slice/isOpenBriefcaseModalSlice";
import Paper from "@mui/material/Paper";
import toFixNumber from "../../utils/toFixNumber";
import { removeMyCoinCase } from "../../redux/slice/coinInBriefcaseSlice";
import { refreshNewCoins } from "../../redux/slice/changingPriceSlice";
import {
  selectMyBriefcaseData,
  selectIsOpenBriefcase,
} from "../../redux/selectors";
import { styles } from "./indexStyle";

const BriefcaseModal = () => {
  const dispatch = useDispatch();
  const isOpenBriefcase = useSelector(selectIsOpenBriefcase);
  const { myCoins } = useSelector(selectMyBriefcaseData);
  const { sum } = useSelector(selectMyBriefcaseData);

  const closeModal = () => {
    dispatch(setIsOpenBriefcase(false));
  };
  const handleDelete = (id) => {
    dispatch(removeMyCoinCase(id));
    dispatch(refreshNewCoins());
  };

  return (
    <Dialog
      open={isOpenBriefcase}
      onClose={closeModal}
      fullWidth
      maxWidth="sm"
      closeAfterTransition={false}
      sx={styles.dialog}
    >
      <IconButton onClick={closeModal} color="error" sx={styles.icon}>
        <CloseIcon />
      </IconButton>
      <DialogTitle sx={styles.title}>Портфель</DialogTitle>

      <TableContainer component={Paper} sx={styles.tableContainer}>
        <Table sx={styles.table} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={styles.cell}>
                Название
              </TableCell>
              <TableCell align="center" sx={styles.cell}>
                Цена
              </TableCell>
              <TableCell align="center" sx={styles.cell}>
                Кол-во
              </TableCell>
              <TableCell align="center" sx={styles.cell}>
                Итого
              </TableCell>
              <TableCell ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myCoins.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">
                  {toFixNumber(item.priceUsd)} $
                </TableCell>
                <TableCell align="center">{item.count}</TableCell>
                <TableCell align="center" sx={styles.cell}>
                  {(+item.count * +toFixNumber(item.priceUsd)).toFixed(2)} $
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={() => handleDelete(item.id)}
                    color="error"
                  >
                    <CloseIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography sx={styles.total}>
          Итого:
          <Typography component="span" sx={styles.sum}>
            {sum} $
          </Typography>
        </Typography>
      </TableContainer>
    </Dialog>
  );
};
export default BriefcaseModal;
