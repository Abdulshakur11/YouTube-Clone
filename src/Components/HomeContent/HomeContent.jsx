import "./HomeContent.scss";
import { Link } from "react-router-dom";
import VIdeoBox from "../VideoBox/VideoBox";
import blair from "../../assets/images/blair.png";
import food_drink from "../../assets/images/food.png";
import { useContext } from "react";
import { Context } from "../../Context/ApiContext/ApiContext";
import VIdeoBoxMid from "../VideoBox-Mid/VideoBox-Mid";


function HomeContent() {
    const { items } = useContext(Context);


    return (
        <>
            <div className="home-content">

                <Link className="user-link" to="/channel">
                    <img src={blair} alt="" />
                    <h3 className="user-link-name">Dollie Blair</h3>
                </Link>

                {items.length > 0 &&
                    <ul className="home-content__box-list">
                        {
                            items.map((item) => {
                                return (
                                    <VIdeoBox key={item.id} title={item.title} id={item.id} url={item.url} />
                                )
                            })
                        }
                    </ul>}

                <div className="home-middle">
                    <h3 className="home-middle-title">Recomended</h3>
                    {items.length > 0 &&
                        <ul className="home-content__box-list">
                            {
                                items.map((item) => (
                                    <VIdeoBoxMid key={item.id} title={item.title} id={item.id} url={item.thumbnailUrl} />
                                ))
                            }
                        </ul>}
                </div>

                <div className="home-bottom">
                    <Link className="home-bottom__user-link" to="/channel">
                        <img src={food_drink} alt="avatar" />
                        <h3 className="user-link-name">Food & Drink</h3>
                        <span className="views home-bottom__link-text">Recommended channel for you</span>
                    </Link>

                    {items.length > 0 &&
                        <ul className="home-content__box-list">
                            {
                                items.map((item) => {
                                    return (
                                        <VIdeoBox key={item.id} title={item.title} id={item.id} url={item.url} />
                                    )
                                })
                            }
                        </ul>}
                </div>
            </div>
        </>
    )
}


export default HomeContent;