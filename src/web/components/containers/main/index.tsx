import "./mainLayout.css"
import FlavanoidDataTable from "../flavinoid";
import GammaDataTable from "../gamma";

const MainLayout = () => {
return(
    <div className="mainLayout">
        <h1>Wine Data Analysis</h1>
        <div className="content">
        <div>
            <h2>Flavanoid Essentials</h2>
            <FlavanoidDataTable/>
        </div>
        <div>
            <h2>Gamma Essentials</h2>
            <GammaDataTable/>
        </div>
        </div>
    </div>
)
}

export default MainLayout;