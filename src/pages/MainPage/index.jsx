import FooterComponent from "../../components/Footer";
import HeaderComponent from "../../components/Header";
import TableAllCoins from "./TableAllCoins";

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