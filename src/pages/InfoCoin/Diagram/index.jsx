import AllTime from "./AllTime";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../../../redux/slice/timeForDiagramSlice";


const Diagram = () => {
    const dispatch = useDispatch();
    const time = useSelector(state => state.time);



    return (
        <>
            <Button sx={{ color: "#c92d82", display:'flex', margin: 'auto', marginTop:'20px', marginBottom: '20px',
                fontSize: {
                    xs: '12px', // для маленьких экранов
                    sm: '14px', // для средних экранов
                    md: '16px', // для больших экранов
                },
             }} onClick={() => dispatch(setTime(!time))}>Открыть {!time ? 'За всё время' : 'Предыдущий и текущий месяцы'}</Button>
            <AllTime />
        </>
    )
}
export default Diagram;