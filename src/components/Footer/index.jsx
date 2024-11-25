import { Box, Link, Typography } from "@mui/material";

const FooterComponent = () =>{

    return (
        <Box sx={{width: '100%', height:'40px', 
            borderTop: '2px solid #c92d82', 
            marginTop: '10px', 
            display: 'flex',     
            justifyContent: 'center',
        }}>
            <Typography sx={{
                marginTop: '10px',
                 fontSize: {
                    xs: '10px', // для маленьких экранов
                    sm: '12px', // для средних экранов
                    md: '14px', // для больших экранов
                },
                }}>Сделано с помощью <Link href="https://docs.coincap.io/" underline="none" sx={{color: '#6b1562'}}>
               API Coincap
              </Link> </Typography>
        </Box>
    )
}
export default FooterComponent;