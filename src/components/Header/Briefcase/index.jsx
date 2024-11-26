import { Box, IconButton, Typography } from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenBriefcase } from "../../../redux/slice/isOpenBriefcaseModalSlice";

const Briefcase = () => {
    const {sum} = useSelector(state => state.sum );
    const dispatch = useDispatch();
    //const isOpenBriefcase = useSelector(state => state.isOpenBriefcase);


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
                }}>{sum.toFixed(2)}$</Typography>
            </Box>
        </Box>
    )
}
export default Briefcase;