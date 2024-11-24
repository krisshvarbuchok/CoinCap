import { Box, IconButton, Typography } from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const Briefcase = () => {

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
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
                }} />
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
                }}>sum</Typography>
            </Box>
        </Box>
    )
}
export default Briefcase;