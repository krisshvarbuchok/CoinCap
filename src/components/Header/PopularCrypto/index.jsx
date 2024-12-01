import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import toFixNumber from "../../../utils/toFixNumber";
import { selectListData } from "../../../redux/selectors";
import { styles } from "./indexStyles";

const PopularCrypto = () => {
  const { popular } = useSelector(selectListData);


  return (
    <Box>
      <Typography variant="subtitle1" component="div" sx={styles.title}>
        Популярные криптовалюты:
      </Typography>

      <Box sx={styles.container}>
        {popular.length !== 0 ? (
          popular.map((item) => (
            <Box key={item.id} sx={styles.itemBox}>
              <Typography variant="subtitle1" sx={styles.text}>
                {item.name}
              </Typography>
              <Typography variant="body2" sx={styles.price}>
                {`${toFixNumber(item.priceUsd)} $`}
              </Typography>
            </Box>
          ))
        ) : (
          <Box sx={styles.container}>
            <Stack sx={styles.skeletonStack}>
              <Skeleton sx={styles.skeleton} />
              <Skeleton sx={styles.skeletonSmall} />
            </Stack>
            <Stack sx={styles.skeletonStack}>
              <Skeleton sx={styles.skeleton} />
              <Skeleton sx={styles.skeletonSmall} />
            </Stack>
            <Stack sx={styles.skeletonStack}>
              <Skeleton sx={styles.skeleton} />
              <Skeleton sx={styles.skeletonSmall} />
            </Stack>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default PopularCrypto;
