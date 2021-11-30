import HomeContent from "../../Components/HomeContent/HomeContent";
import SideBar from '../../Components/SideBar/SideBAr';

import "./Home.scss";

function Home() {
    return (
        <>
            <div className="home">
                <SideBar />

                <HomeContent />
            </div>
        </>
    )
}

export default Home;