import Menu from "../../components/Menu/Menu";
import { rootList } from "../../constants/indes";

const RootDashboard = () => {

    return (
        <div>
            <Menu list={rootList} />
            <h1>Root Dashboard</h1>
        </div>
    )
}

export default RootDashboard;
