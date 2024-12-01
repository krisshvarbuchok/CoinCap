import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenCoinPurchase } from "../../redux/slice/isOpenCoinPurchaseModalSlice";
import { removeBuy, setBuy } from "../../redux/slice/buyCoinSlice";
import { addSum } from "../../redux/slice/sumCaseSlice";
import CloseIcon from '@mui/icons-material/Close';
import toFixNumber from "../../utils/toFixNumber";
import { addCoinInCase } from "../../redux/slice/coinInBriefcaseSlice";
import { selectIsOpenCoinPurchase, selectCoin, selectBuy } from "../../redux/selectors";

const CoinPurchaseModal = () => {
    const dispatch = useDispatch();
    const isOpenCoinPurchase = useSelector(selectIsOpenCoinPurchase);
    const { coin } = useSelector(selectCoin);
    const buy = useSelector(selectBuy);

    const closeModal = () => {
        dispatch(setIsOpenCoinPurchase(!isOpenCoinPurchase));
        dispatch(removeBuy());
    }
    const handleChange = (e) => {
        const newValue = e.target.value;
        // Устанавливаем только если это цифры
        if (/^\d*$/.test(newValue)) {
            dispatch(setBuy(+newValue));
        }
    }
    const handleClick = () => {
        if (typeof buy === 'number' && !isNaN(buy)) {
            dispatch(addCoinInCase({...coin, count: buy}));
            dispatch(addSum((+buy * +toFixNumber(coin.priceUsd)).toFixed(2)));
            dispatch(removeBuy());
            dispatch(setIsOpenCoinPurchase(!isOpenCoinPurchase));
        }
    }


    return (
        <Dialog open={isOpenCoinPurchase} onClose={closeModal} fullWidth maxWidth="sm"
            closeAfterTransition={false}
            sx={{
                '& .MuiDialog-paper': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
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
            }}>Купить
                <Typography sx={{
                    color: '#c92d82',
                    fontSize: {
                        xs: '16px', // для маленьких экранов
                        sm: '18px', // для средних экранов
                        md: '20px', // для больших экранов
                    },
                }}>{coin.name}</Typography></DialogTitle>
            <DialogContent>
                <DialogContentText sx={{
                    textAlign: 'center', marginBottom: 2,
                    fontSize: {
                        xs: '12px', // для маленьких экранов
                        sm: '14px', // для средних экранов
                        md: '16px', // для больших экранов
                    },
                }}>Введите количество:</DialogContentText>
                <TextField color="secondary"
                    sx={{
                        '& .MuiInputBase-input': {
                            textAlign: 'center',
                            paddingTop: '7px',
                            paddingBottom: '7px',
                            fontSize: {
                                xs: '12px', // для маленьких экранов
                                sm: '14px', // для средних экранов
                                md: '16px', // для больших экранов
                            },
                        },
                    }}
                    value={buy}
                    onChange={handleChange}
                    placeholder="Введите только цифры"></TextField>
            </DialogContent>
            <DialogActions
                sx={{
                    justifyContent: 'center',
                }}
            >
                <Button
                    variant="outlined"
                    color="secondary"
                    sx={{
                        color: '#c92d82',
                        borderColor: '#c92d82',
                        marginBottom: '20px',
                        fontSize: {
                            xs: '12px', // для маленьких экранов
                            sm: '14px', // для средних экранов
                            md: '16px', // для больших экранов
                        },
                    }}
                    onClick={handleClick}>Добавить</Button>
            </DialogActions>
        </Dialog>

    )
}
export default CoinPurchaseModal;
