import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import toFixNumber from "../../../utils/toFixNumber";
import { selectListData } from "../../../redux/selectors";

const PopularCrypto = () => {
    const { popular } = useSelector(selectListData);
    // console.log(popular);

    return (
        <Box >
            <Typography variant="subtitle1" component="div"
                sx={{
                    mb: 1,
                    color: 'black',
                    fontSize: {
                        xs: '12px', // для маленьких экранов
                        sm: '14px', // для средних экранов
                        md: '16px', // для больших экранов
                    },
                    position: 'relative',
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        top: '100%', // линия будет под текстом
                        left: 0,
                        width: '100%',
                        height: '1px',
                        backgroundColor: '#c92d82',
                    }
                }}>
                Популярные криптовалюты:
            </Typography>

            <Box sx={{
                display: 'flex', flexDirection: 'row', gap: 2
            }}>
                {popular.length !== 0 ?
                    (popular.map(item => (
                        <Box key={item.id} sx={{ textAlign: 'left' }}>
                            <Typography variant="subtitle1" sx={{
                                fontWeight: 'bold', color: 'black',
                                fontSize: {
                                    xs: '12px', // для маленьких экранов
                                    sm: '14px', // для средних экранов
                                    md: '16px', // для больших экранов
                                },
                            }}>
                                {item.name}
                            </Typography>
                            <Typography variant="body2" sx={{
                                color: 'black',
                                fontSize: {
                                    xs: '12px', // для маленьких экранов
                                    sm: '14px', // для средних экранов
                                    md: '16px', // для больших экранов
                                },
                            }}>{`${toFixNumber(item.priceUsd)} $`}</Typography>
                        </Box>
                    ))) :
                    <Box sx={{
                        display: 'flex', flexDirection: 'row', gap: 2
                    }}>
                        <Stack sx={{ width: 50 }} >
                            <Skeleton sx={{
                                fontSize: {
                                    xs: '12px', // для маленьких экранов
                                    sm: '14px', // для средних экранов
                                    md: '16px', // для больших экранов
                                }
                            }} />
                            <Skeleton sx={{
                                fontSize: {
                                    xs: '10px', // для маленьких экранов
                                    sm: '12px', // для средних экранов
                                    md: '14px', // для больших экранов
                                }
                            }} />
                        </Stack>
                        <Stack sx={{ width: 50 }} >
                            <Skeleton sx={{
                                fontSize: {
                                    xs: '12px', // для маленьких экранов
                                    sm: '14px', // для средних экранов
                                    md: '16px', // для больших экранов
                                }
                            }} />
                            <Skeleton sx={{
                                fontSize: {
                                    xs: '10px', // для маленьких экранов
                                    sm: '12px', // для средних экранов
                                    md: '14px', // для больших экранов
                                }
                            }} />
                        </Stack>
                        <Stack sx={{ width: 50 }} >
                            <Skeleton sx={{
                                fontSize: {
                                    xs: '12px', // для маленьких экранов
                                    sm: '14px', // для средних экранов
                                    md: '16px', // для больших экранов
                                }
                            }} />
                            <Skeleton sx={{
                                fontSize: {
                                    xs: '10px', // для маленьких экранов
                                    sm: '12px', // для средних экранов
                                    md: '14px', // для больших экранов
                                }
                            }} />
                        </Stack>



                    </Box>
                }
            </Box>
        </Box>
    )
}
export default PopularCrypto;