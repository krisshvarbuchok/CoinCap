import { useNavigate } from "react-router-dom";

const TableAllCoins = () =>{
    const navigate = useNavigate();

    const handleOpenCoin = () =>{
        navigate('/infoCoin')
    }

    return (
        <>
           <div onClick={() => handleOpenCoin()}> table</div> 
        </>
    )
}
export default TableAllCoins;