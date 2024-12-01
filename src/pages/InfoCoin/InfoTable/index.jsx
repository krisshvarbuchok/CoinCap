import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import toFixNumber from "../../../utils/toFixNumber";
import stylesFunction from "../../../utils/stylesFunction";
import { selectCoin } from "../../../redux/selectors";
import numeralFormat from "../../../utils/numeralFormat";
import { styles } from "./indexStyles";

const InfoTable = () => {
  const { coin } = useSelector(selectCoin);

  return (
    <TableContainer component={Paper} sx={styles.container}>
      <Table sx={styles.table} size="small" aria-label="vertical table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={styles.tableCell}>
              Информация
            </TableCell>
            <TableCell align="center" sx={styles.tableCell}>
              Данные о валюте
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Цена</TableCell>
            <TableCell sx={styles.tableCell}>
              {coin.priceUsd ? `${toFixNumber(coin.priceUsd)} $` : "-"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Доступное предложение для торговли</TableCell>
            <TableCell>
              {coin.supply ? numeralFormat(coin.supply) : "-"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Общее кол-во выпущенных активов</TableCell>
            <TableCell>
              {coin.maxSupply ? numeralFormat(coin.maxSupply) : "-"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Объем торгов за последние 24 часа</TableCell>
            <TableCell>
              {coin.volumeUsd24Hr ? numeralFormat(coin.volumeUsd24Hr) : "-"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Средняя цена по объему за последние 24 часа</TableCell>
            <TableCell>
              {coin.vwap24Hr ? `${toFixNumber(coin.vwap24Hr)} $` : "-"}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Процентное изменение цены за последние 24 часа
            </TableCell>
            <TableCell>
              <Typography sx={styles.text} className={stylesFunction(coin.changePercent24Hr)}>
                {coin.changePercent24Hr
                  ? `${toFixNumber(coin.changePercent24Hr)} %`
                  : "-"}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Сайт</TableCell>
            <TableCell>
              {coin.explorer ? (
                <Link href={coin.explorer} underline="hover" color="black">
                  {coin.explorer}
                </Link>
              ) : (
                "-"
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default InfoTable;
