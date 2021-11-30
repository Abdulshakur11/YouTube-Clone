import "./SideBar.scss";
import { Link } from "react-router-dom";
// Link icons
import Home from "../../Library/Home";
import Trending from "../../Library/Trending";
import Subscribe from "../../Library/Subscribe";
import Library from "../../Library/Library";
import History from "../../Library/History";
import Whatch from "../../Library/Whatch";
import Music from "../../Library/Music";
import Games from "../../Library/Games";
import ArrowBottom from "../../Library/arrow-bottom";
import Settings from "../../Library/settings";

// Subscription images
import bro_1 from "../../assets/images/bro-1.png"
import bro_2 from "../../assets/images/bro-2.png"
import bro_3 from "../../assets/images/bro-3.png"
import bro_4 from "../../assets/images/bro-4.png"
import bro_5 from "../../assets/images/bro-5.png"
import bro_6 from "../../assets/images/bro-6.png"
import Star from "../../Library/Star";
import Heart from "../../Library/Heart";


function SideBar() {

    const handleClick = (evt) => {
        const allActiveClasses = document.querySelectorAll(".item-link-active");

        allActiveClasses.forEach((link) => {
            link.classList.remove("item-link-active");
        })

        evt.currentTarget.classList.add("item-link-active")
    }

    return (
        <>
            <div className="sidebar">
                <ul className="sidebar__list">

                    <li className="sidebar__item-top item">
                        <ul className="item-top__list list">
                            <li className="item-top__item" onClick={handleClick}>
                                <Link className="item-link item-link-active" to="/" onClick={handleClick} >
                                    <span>
                                        <Home />
                                    </span>
                                    Home
                                </Link>
                            </li>
                            <li className="item-top__item">
                                <Link className="item-link" to="/trending" onClick={handleClick} >
                                    <span>
                                        <Trending />
                                    </span>
                                    Trending
                                </Link>
                            </li>
                            <li className="item-top__item">
                                <Link className="item-link" to="/" onClick={handleClick} >
                                    <span>
                                        <Subscribe />
                                    </span>
                                    Subscriptions
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="sidebar__item-middle item">
                        <ul className="item-middle__list list">
                            <li className="item-middle__item">

                                <Link className="item-link" to="/" onClick={handleClick} >
                                    <span>
                                        <Library />
                                    </span>
                                    Library
                                </Link>
                            </li>
                            <li className="item-middle__item">
                                <Link className="item-link" to="/" onClick={handleClick} >
                                    <span>
                                        <History />
                                    </span>
                                    History
                                </Link>
                            </li>
                            <li className="item-middle__item">
                                <Link className="item-link" to="/" onClick={handleClick} >
                                    <span>
                                        <Whatch />
                                    </span>
                                    Watch later
                                </Link>
                            </li>
                            <li className="item-middle__item">
                                <Link className="item-link" to="/" onClick={handleClick} >
                                    <span>
                                        <Star />
                                    </span>
                                    Favourites
                                </Link>
                            </li>
                            <li className="item-middle__item">
                                <Link className="item-link" to="/" onClick={handleClick} >
                                    <span>
                                        <Heart />
                                    </span>
                                    Liked videos
                                </Link>
                            </li>
                            <li className="item-middle__item">
                                <Link className="item-link" to="/" onClick={handleClick} >
                                    <span>
                                        <Music />
                                    </span>
                                    Music
                                </Link>
                            </li>
                            <li className="item-middle__item">
                                <Link className="item-link" to="/" onClick={handleClick} >
                                    <span>
                                        <Games />
                                    </span>
                                    Games
                                </Link>
                            </li>
                            <li className="item-middle__item">
                                <Link className="item-link" to="/" onClick={handleClick} >
                                    <span>
                                        <ArrowBottom />
                                    </span>
                                    Show more
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="sidebar__item-bottom item">
                        <h3 className="item-bottom__title">Subscriptions</h3>
                        <ul className="item-bottom__list list">
                            <li className="item-bottom__item">
                                <span><img src={bro_1} alt="user-avatar" /></span>
                                <Link className="item-link" to="/channel" onClick={handleClick} >Gussie Singleton</Link>
                            </li>
                            <li className="item-bottom__item">
                                <span><img src={bro_2} alt="" /></span>
                                <Link className="item-link" to="/channel" onClick={handleClick} >Gussie Singleton</Link>
                            </li>
                            <li className="item-bottom__item">
                                <span><img src={bro_3} alt="" /></span>
                                <Link className="item-link" to="/channel" onClick={handleClick} >Gussie Singleton</Link>
                            </li>
                            <li className="item-bottom__item">
                                <span><img src={bro_4} alt="" /></span>
                                <Link className="item-link" to="/channel" onClick={handleClick} >Gussie Singleton</Link>
                            </li>
                            <li className="item-bottom__item">
                                <span><img src={bro_5} alt="" /></span>
                                <Link className="item-link" to="/channel" onClick={handleClick} >Gussie Singleton</Link>
                            </li>
                            <li className="item-bottom__item">
                                <span><img src={bro_6} alt="" /></span>
                                <Link className="item-link" to="/channel" onClick={handleClick} >Gussie Singleton</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="setting-wrapper">

                    <Link className="item-link-btn" to="/setting">
                        <span>
                            <Settings />
                        </span>
                        Setting
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SideBar;