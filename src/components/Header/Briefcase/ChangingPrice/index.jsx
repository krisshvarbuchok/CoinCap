import {  useSelector } from "react-redux";
import { Typography } from "@mui/material";
import stylesFunction from "../../../../utils/stylesFunction";
import { selectChangingPriceData, selectMyBriefcaseData } from "../../../../redux/selectors";

const MAX_PERCENT = 100;

const ChangingPrice = () => {
    const { sumChanged } = useSelector(selectChangingPriceData);
    //console.log('sumChanged' , sumChanged);
   const {sum} = useSelector(selectMyBriefcaseData);
   // console.log('sum', sum);

    const changing = (sumChanged - +sum).toFixed(2);
    const percentage = ((changing * MAX_PERCENT) / +sum).toFixed(2);

   

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