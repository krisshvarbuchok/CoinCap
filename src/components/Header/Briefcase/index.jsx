import { Box, IconButton, Typography } from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenBriefcase } from "../../../redux/slice/isOpenBriefcaseModalSlice";
import ChangingPrice from "./ChangingPrice";
import { fetchGetChangingPrice } from "../../../redux/slice/changingPriceSlice";
import { useEffect } from "react";
import { selectChangingPriceData, selectMyBriefcaseData } from "../../../redux/selectors";


const Briefcase = () => {
    const fontSizeStyles = {
        fontSize: {
          xs: '12px', 
          sm: '14px', 
          md: '16px', 
        },
      };


    const dispatch = useDispatch();
    const { myCoins } = useSelector(selectMyBriefcaseData);
    const {sum} = useSelector(state => state.myBriefcase);
    const { sumChanged, statusRefresh } = useSelector(selectChangingPriceData);
    
    


    useEffect(() => {
            myCoins.forEach(item => dispatch(fetchGetChangingPrice(item)));
    }, [myCoins])

    const openBriefcase = () => {
        dispatch(setIsOpenBriefcase(true));
    }
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
                onClick={openBriefcase}
                size="large"
                sx={{
                    '&:hover': {
                        backgroundColor: 'transparent', 
                    }
                }}
            >
                <BusinessCenterIcon sx={{
                    fontSize: {
                        xs: 30, 
                        sm: 40, 
                        md: 70, 
                    }, '&:hover': { color: '#c92d82' }
                }}
                />
            </IconButton>

            <Box sx={{...fontSizeStyles}}>
                <Typography sx={{
                    color: 'black',
                    ...fontSizeStyles
                }}>Итого:</Typography>
                <Typography sx={{
                    color: '#c92d82', fontWeight: 'bold',
                    ...fontSizeStyles
                }}>{sum}$</Typography>

                {(+sumChanged !== +sum && +sum !== 0 && statusRefresh === 'successed') && <ChangingPrice /> }
                {statusRefresh === "failed" && <Typography sx={{color: 'black'}}>...oops</Typography>}

            </Box>
        </Box>
    )
}
export default Briefcase;