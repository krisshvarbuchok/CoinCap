import AllTime from "./AllTime";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../../../redux/slice/timeForDiagramSlice";
import { selectTime } from "../../../redux/selectors";

const Diagram = () => {
  const dispatch = useDispatch();
  const time = useSelector(selectTime);

  return (
    <>
      <Button
        sx={{
          color: "#c92d82",
          display: "flex",
          margin: "auto",
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: {
            xs: "12px",
            sm: "14px",
            md: "16px",
          },
        }}
        onClick={() => dispatch(setTime(!time))}
      >
        Открыть {!time ? "За всё время" : "Предыдущий и текущий месяцы"}
      </Button>
      <AllTime />
    </>
  );
};
export default Diagram;
