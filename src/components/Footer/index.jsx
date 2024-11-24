import { Box, Typography } from "@mui/material";

const FooterComponent = () =>{

    return (
        <Box sx={{width: '100%', height:'40px', 
            borderTop: '2px solid #c92d82', 
            marginTop: '10px', 
            display: 'flex',     
            justifyContent: 'center',
        }}>
            <Typography sx={{
                 fontSize: {
                    xs: '10px', // для маленьких экранов
                    sm: '12px', // для средних экранов
                    md: '14px', // для больших экранов
                },
                }}>Сделано с помощью API Coincap </Typography>
        </Box>
    )
}
export default FooterComponent;