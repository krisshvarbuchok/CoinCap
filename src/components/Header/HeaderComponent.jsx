import { AppBar, Box, Toolbar } from "@mui/material";
import Briefcase from "./Briefcase/Briefcase";
import PopularCrypto from "./PopularCrypto/PopularCrypto";

const HeaderComponent = () => {

    return (

        <Box sx={{ width: '100%' }}>
            <AppBar position='static' sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
                <Toolbar sx={{ width: '80%', height: 100, m: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <PopularCrypto />
                    <Briefcase />
                </Toolbar>
            </AppBar>
        </Box >

    )
}
export default HeaderComponent;