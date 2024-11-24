import FooterComponent from "../../Footer/FooterComponent";
import HeaderComponent from "../../Header/HeaderComponent";
import TableAllCoins from "./TableAllCoins/TableAllCoins";

const MainPage = () => {

    return (
        <div className="container">
                <HeaderComponent />
                <TableAllCoins />
                <FooterComponent />
        </div>
    )
}
export default MainPage;