import { Box, IconButton, Typography } from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenBriefcase } from "../../../redux/slice/isOpenBriefcaseModalSlice";
import ChangingPrice from "./ChangingPrice";
import { fetchGetChangingPrice } from "../../../redux/slice/changingPriceSlice";
import { useEffect } from "react";
import { setStatusMyCoins } from "../../../redux/slice/coinInBriefcaseSlice";
import { selectChangingPriceData, selectMyBriefcaseData, selectSum } from "../../../redux/selectors";

const Briefcase = () => {
    const dispatch = useDispatch();
    const { myCoins, statusMyCoins } = useSelector(selectMyBriefcaseData);
    console.log('myCoins', myCoins);
    
    const { sum } = useSelector(selectSum);
    const { sumChanged, statusRefresh } = useSelector(selectChangingPriceData);
    console.log('sumChanged', sumChanged);
    // const {newCoins} = useSelector(state => state.changingPrice)
    // console.log('newCoins', newCoins);
    


    useEffect(() => {
       // if(statusMyCoins === 'successed'){
            myCoins.forEach(item => dispatch(fetchGetChangingPrice(item)));
            console.log('сработал юзэффект');
       //     dispatch(setStatusMyCoins())
        //}
       // localStorage.clear()
        
    }, [myCoins])

    const openBriefcase = () => {
        dispatch(setIsOpenBriefcase(true));
    }
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
                onClick={openBriefcase}
                size="large"
                // edge="start"
                // color="inherit"
                // aria-label="menu"
                sx={{
                    '&:hover': {
                        backgroundColor: 'transparent', // Сохраняем прозрачный фон при ховере
                    }
                }}
            >
                <BusinessCenterIcon sx={{
                    fontSize: {
                        xs: 30, // для маленьких экранов
                        sm: 40, // для средних экранов
                        md: 70, // для больших экранов
                    }, '&:hover': { color: '#c92d82' }
                }}

                />
            </IconButton>



            <Box sx={{
                fontSize: {
                    xs: '12px', // для маленьких экранов
                    sm: '14px', // для средних экранов
                    md: '16px', // для больших экранов
                },
            }}>
                <Typography sx={{
                    color: 'black',
                    fontSize: {
                        xs: '12px', // для маленьких экранов
                        sm: '14px', // для средних экранов
                        md: '16px', // для больших экранов
                    },
                }}>Итого:</Typography>
                <Typography sx={{
                    color: '#c92d82', fontWeight: 'bold',
                    fontSize: {
                        xs: '12px', // для маленьких экранов
                        sm: '14px', // для средних экранов
                        md: '16px', // для больших экранов
                    },
                }}>{sum}$</Typography>

                {(+sumChanged !== +sum && +sum !== 0 && statusRefresh === 'successed') && <ChangingPrice /> }
                

            </Box>
        </Box>
    )
}
export default Briefcase;