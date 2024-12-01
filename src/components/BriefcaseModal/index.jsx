import { Dialog, DialogTitle, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenBriefcase } from "../../redux/slice/isOpenBriefcaseModalSlice";
import Paper from '@mui/material/Paper';
import { deleteSum } from "../../redux/slice/sumCaseSlice";
import toFixNumber from "../../utils/toFixNumber";
import { removeMyCoinCase } from "../../redux/slice/coinInBriefcaseSlice";
import { refreshNewCoins } from "../../redux/slice/changingPriceSlice";
import { selectMyBriefcaseData, selectIsOpenBriefcase, selectSum } from "../../redux/selectors";



const BriefcaseModal = () => {
    const dispatch = useDispatch();
    const isOpenBriefcase = useSelector(selectIsOpenBriefcase);
    const { myCoins } = useSelector(selectMyBriefcaseData);
    //console.log('myCoins', myCoins);
    const { sum } = useSelector(selectSum);
    //console.log('sum', sum);
    

    const closeModal = () => {
        dispatch(setIsOpenBriefcase(false));
    }
    const handleDelete = (id, num) => {
        //console.log(id);
        dispatch(removeMyCoinCase(id));
        dispatch(deleteSum(num));
        dispatch(refreshNewCoins());
    }


    return (
        <Dialog open={isOpenBriefcase} onClose={closeModal} fullWidth maxWidth="sm"
            closeAfterTransition={false}
            sx={{
                '& .MuiDialog-paper': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0px 0px 10px #c92d82',
                    position: 'relative', // Для абсолютного позиционирования кнопки Close

                },
            }}>
            <IconButton
                onClick={closeModal}
                color="error"
                sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogTitle sx={{
                display: 'flex', alignItems: 'baseline',
                justifyContent: 'center', gap: '10px',
                fontSize: {
                    xs: '16px', // для маленьких экранов
                    sm: '18px', // для средних экранов
                    md: '20px', // для больших экранов
                },
            }}>Портфель
            </DialogTitle>

            <TableContainer component={Paper}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '150px', // Минимальная высота всей таблицы
                    '& .MuiTableCell-root': {
                        //height: '30px', // Высота ячейки
                        fontSize: {
                            xs: '12px', // Размер шрифта для маленьких экранов
                            sm: '14px',
                            md: '16px',
                        },
                        padding: '8px', // Управление отступами внутри ячеек
                    },
                    '& .MuiTableRow-root': {
                        height: '50px', // Высота строки таблицы
                    },
                }}>
                <Table sx={{ width: '80%', marginBottom: '20px', height: '30px', }} size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Название</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Цена</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Кол-во</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Итого</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myCoins.map(item => (
                            <TableRow key={item.id}>
                                <TableCell align="center">{item.name}</TableCell>
                                <TableCell align="center">{toFixNumber(item.priceUsd)} $</TableCell>
                                <TableCell align="center">{item.count}</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>{(+item.count * +toFixNumber(item.priceUsd)).toFixed(2)} $</TableCell>
                                <TableCell align="center">
                                    <IconButton
                                        onClick={() => handleDelete(item.id, (+item.count * +toFixNumber(item.priceUsd)).toFixed(2))}
                                        color="error"
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Typography sx={{
                    width: '100%',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    gap: '5px',
                    mt: 2,
                    mb: 2,
                    fontSize: {
                        xs: '14px', // Размер шрифта для маленьких экранов
                        sm: '16px',
                        md: '18px',
                    },

                }}>
                    Итого: <Typography component="span" sx={{ fontWeight: 'bold', fontSize: {
                            xs: '14px', // Размер шрифта для маленьких экранов
                            sm: '16px',
                            md: '18px',
                        }, }}>{sum} $</Typography>
                </Typography>
            </TableContainer>
        </Dialog>
    )
}
export default BriefcaseModal;