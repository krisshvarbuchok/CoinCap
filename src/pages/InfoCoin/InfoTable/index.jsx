import { Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import numeral from "numeral";
import { useSelector } from "react-redux";
import toFixNumber from "../../../utils/toFixNumber";
import stylesFunction from "../../../utils/stylesFunction";
import { selectCoin } from "../../../redux/selectors";

const InfoTable = () => {
    const { coin } = useSelector(selectCoin);
    //console.log(coin);


    return (
        <TableContainer component={Paper} sx={{ width: '90%', margin: 'auto', }}>
            <Table sx={{
                width: '100%',
                '& .MuiTableCell-root': {
                    fontSize: {
                        xs: '12px', // Для текста в ячейках
                        sm: '14px',
                        md: '16px',
                    },
                }
            }} size="small" aria-label="vertical table">
                <TableHead >
                    <TableRow>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }} >Информация</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Данные о валюте</TableCell>
                    </TableRow>

                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Цена</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>{coin.priceUsd ? `${toFixNumber(coin.priceUsd)} $` : '-'}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Доступное предложение для торговли</TableCell>
                        <TableCell >{coin.supply ?
                            `${numeral(parseFloat(coin.supply)).format('0.00a').replace('k', ' тыс')
                                .replace('b', ' млрд')
                                .replace('m', ' млн')
                                .replace('t', ' трлн')} $`

                            : '-'}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Общее кол-во выпущенных активов</TableCell>
                        <TableCell >{coin.maxSupply ?
                            `${numeral(parseFloat(coin.maxSupply)).format('0.00a').replace('k', ' тыс')
                                .replace('b', ' млрд')
                                .replace('m', ' млн')
                                .replace('t', ' трлн')} $`
                            : '-'}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Объем торгов за последние 24 часа</TableCell>
                        <TableCell >{coin.volumeUsd24Hr ?
                            `${numeral(parseFloat(coin.volumeUsd24Hr)).format('0.00a').replace('k', ' тыс')
                                .replace('b', ' млрд')
                                .replace('m', ' млн')
                                .replace('t', ' трлн')} $`
                            : '-'}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Средняя цена по объему за последние 24 часа</TableCell>
                        <TableCell >{coin.vwap24Hr ?
                            `${toFixNumber(coin.vwap24Hr)} $`
                            : '-'}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Процентное изменение цены за последние 24 часа</TableCell>
                        <TableCell >
                            <Typography className={stylesFunction(coin.changePercent24Hr)}>
                                {coin.changePercent24Hr ?
                                    `${toFixNumber(coin.changePercent24Hr)} %` :
                                    '-'}
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Сайт</TableCell>
                        <TableCell >{coin.explorer ?
                            <Link href={coin.explorer} underline="hover" color="black">
                                {coin.explorer}
                            </Link> :
                            '-'
                        }
                        </TableCell>
                    </TableRow>

                </TableBody>

            </Table>
        </TableContainer>
    )
}
export default InfoTable;