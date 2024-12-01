import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetChangingPrice } from "../../../../redux/slice/changingPriceSlice";
import { Typography } from "@mui/material";
import stylesFunction from "../../../../utils/stylesFunction";
import { selectChangingPriceData, selectSum } from "../../../../redux/selectors";

const MAX_PERCENT = 100;

const ChangingPrice = () => {
    //const { myCoins } = useSelector(state => state.myBriefcase);
    //const dispatch = useDispatch();
    const { sumChanged } = useSelector(selectChangingPriceData);
    console.log(sumChanged);
    const { sum } = useSelector(selectSum);
    console.log(sum);

    //console.log('changingPrice', typeof sumChanged);
    const changing = (sumChanged - +sum).toFixed(2);
    const percentage = ((changing * MAX_PERCENT) / sum).toFixed(2);

   

    return (
        <>
            <Typography
            className={stylesFunction(changing)}
                sx={{
                  
                    fontSize: {
                        xs: '12px', // для маленьких экранов
                        sm: '14px', // для средних экранов
                        md: '16px', // для больших экранов
                    },
                }}
            >

                {changing}$
            </Typography>
            <Typography
            className={stylesFunction(changing)}
                sx={{
                    
                    fontSize: {
                        xs: '12px', // для маленьких экранов
                        sm: '14px', // для средних экранов
                        md: '16px', // для больших экранов
                    },
                }}
            >{percentage}%</Typography>
        </>

    )
}
export default ChangingPrice;