import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import numeral from "numeral";
import { useSelector } from "react-redux";

const InfoTable = () => {
    const { coin } = useSelector(state => state.coin);

    return (
        <>
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
                            <TableCell sx={{ fontWeight: 'bold' }}>{coin.priceUsd ? `${(+(coin.priceUsd)).toFixed(2)} $` : '-'}</TableCell>
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
                                `${(+(coin.vwap24Hr)).toFixed(2)} $`
                                : '-'}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Процентное изменение цены за последние 24 часа</TableCell>
                            <TableCell >{ }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Сайт</TableCell>
                            <TableCell >{ }</TableCell>
                        </TableRow>

                    </TableBody>

                </Table>
            </TableContainer>
        </>
    )
}
export default InfoTable;