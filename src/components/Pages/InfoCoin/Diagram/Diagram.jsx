import AllTime from "./AllTime/AllTime";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../../../../redux/slice/timeForDiagramSlice";


const Diagram = () => {
    const dispatch = useDispatch();
    const time = useSelector(state => state.time);



    return (
        <>
            <Button sx={{ color: "#c92d82", display:'flex', margin: 'auto' }} onClick={() => dispatch(setTime(!time))}>Открыть {!time ? 'За всё время' : 'Предыдущий и текущий месяцы'}</Button>
            <AllTime />
        </>
    )
}
export default Diagram;