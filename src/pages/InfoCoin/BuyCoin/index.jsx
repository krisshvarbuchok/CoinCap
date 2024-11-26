import { Box, Input, Typography } from "@mui/material";
import BuyButton from "./BuyButton";
import { useDispatch, useSelector } from "react-redux";
import { setBuy } from "../../../redux/slice/buyCoinSlice";

const BuyCoin = () => {
    const dispatch = useDispatch();
    const buy = useSelector(state => state.buy);
    
   // console.log('buy',typeof buy);


    const handleChange = (e) => {
        const newValue = e.target.value;
        // Устанавливаем только если это цифры
        if (/^\d*$/.test(newValue)) {
            dispatch(setBuy(+newValue));
        }
    }

    return (
        <Box sx={{
            width: '80%', margin: 'auto', marginBottom: '20px',
            paddingTop: '10px', paddingBottom: '10px',
            borderRadius: '10px',
            display: 'flex', backgroundColor: '#f2f2f2', flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Typography>Введите количество:</Typography>
            <Input
                color="secondary"
                sx={{
                    '& .MuiInputBase-input': {
                        textAlign: 'center', // Убедимся, что выравнивание применено
                    },
                }}
                value={buy}
                onChange={handleChange}
                placeholder="Введите только цифры"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
            <BuyButton />
        </Box>
    )
}
export default BuyCoin;