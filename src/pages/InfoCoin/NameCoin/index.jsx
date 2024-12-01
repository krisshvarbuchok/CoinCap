import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCoin } from "../../../redux/selectors";

const NameCoin = () => {

    const { coin } = useSelector(selectCoin);

    return (
        <Box sx={{ display: 'flex', marginTop: '20px', marginBottom: '20px', justifyContent: 'center', gap: '20px' }}>
            <Box sx={{
                color: '#c92d82', fontSize: {
                    xs: '18px',
                    sm: '24px',
                    md: '44px',
                }, border: {
                    xs: '1px solid #c92d82',
                    sm: '2px solid #c92d82',
                    md: '3px solid #c92d82',
                },
                paddingLeft: '5px',
                paddingRight: '5px'
            }}>{coin.symbol}
            </Box>
            <Box sx={{
                color: '#c92d82',
                fontSize: {
                    xs: '18px',
                    sm: '24px',
                    md: '44px',
                }
            }}>{coin.name}
            </Box>
        </Box>
    )
}
export default NameCoin;