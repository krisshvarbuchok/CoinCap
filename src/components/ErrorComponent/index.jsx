import ErrorIcon from "@mui/icons-material/Error";
import { Box, Typography } from "@mui/material";
import {
  selectCoin,
  selectDiagram,
  selectListData,
} from "../../redux/selectors";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ErrorComponent = () => {
  const [mainError, setMainError] = useState(null);
  const { error } = useSelector(selectListData);
  const { errorCoin } = useSelector(selectCoin);
  const { errorDiagram } = useSelector(selectDiagram);
  useEffect(() => {
    if (errorCoin || error || errorDiagram) {
      setMainError(errorCoin || error || errorDiagram);
    }
  }, [error, errorCoin, errorDiagram]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <ErrorIcon />
      <Typography
        sx={{
          fontSize: {
            xs: "12px", 
            sm: "16px",
            md: "20px", 
          },
        }}
      >
        ...ooops
      </Typography>
      <Typography
        sx={{
          marginLeft: 1,
          fontSize: {
            xs: "12px",
            sm: "16px", 
            md: "20px",
          },
        }}
      >
        {mainError?.name}: {mainError?.message}
      </Typography>
    </Box>
  );
};
export default ErrorComponent;
