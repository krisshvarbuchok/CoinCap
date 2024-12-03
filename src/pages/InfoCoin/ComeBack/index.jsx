import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { removeInfoCoinFromComeBack } from "../../../redux/slice/infoCoinSlice";
import { removeBuy } from "../../../redux/slice/buyCoinSlice";

const ComeBack = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleComeBack = () => {
    //console.log('работает');
    
    navigate("/");
    dispatch(removeInfoCoinFromComeBack());
    dispatch(removeBuy());
  };

  return (
    <Button
      variant="outlined"
      color="secondary"
      sx={{
        "&::before": {
          content: '"←"',
        },
        color: "#c92d82",
        borderColor: "#c92d82",
        marginLeft: "20px",
        marginTop: "20px",
        marginBottom: "20px",
        fontSize: {
          xs: "12px", 
          sm: "14px",
          md: "16px", 
        },
      }}
      onClick={() => handleComeBack()}
    >
      Назад
    </Button>
  );
};
export default ComeBack;
