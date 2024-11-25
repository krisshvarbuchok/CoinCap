import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addSum } from "../../../../redux/slice/sumCaseSlice";

const BuyButton = () => {
    const buy = useSelector(state => state.buy);
    const {coin} = useSelector(state => state.coin);
    const dispatch = useDispatch();

    const handleClick = () => {
        if(typeof buy === 'number' && !isNaN(buy)){
            dispatch(addSum((+buy * parseFloat(coin.priceUsd))))
        }
    }

    return (
        <Button
            variant="outlined"
            color="secondary"
            sx={{
                color: '#c92d82',
                borderColor: '#c92d82',
                marginLeft: '20px',
                marginTop: '20px',
                marginBottom: '20px',
                fontSize: {
                    xs: '12px', // для маленьких экранов
                    sm: '14px', // для средних экранов
                    md: '16px', // для больших экранов
                },

            }}
            onClick={handleClick}
        >Купить</Button>
    )
}
export default BuyButton;