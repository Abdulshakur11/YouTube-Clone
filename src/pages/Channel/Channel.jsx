import "./Channel.scss";
import SideBar from "../../Components/SideBar/SideBAr";
import user_img from "../../assets/images/food.png";
import { Link, NavLink } from "react-router-dom";
import search from "../../assets/images/search-icon.svg"
import channel_img from "../../assets/images/channel-img.png";
import toga from "../../assets/images/tog'a.png"
import { useContext } from "react";
import { Context } from "../../Context/ApiContext/ApiContext";
import VIdeoBox from "../../Components/VideoBox/VideoBox";

function Channel() {
    const { items } = useContext(Context)
    return (
        <>
            <div className="home">
                <SideBar />
                <div className="channel-page channel">
                    <div className="background-img"></div>

                    <div className="channel-page__user-wrapper">
                        <img className="user-img" src={user_img} alt="user-img" />

                        <div className="channel__user-name-wrapper">
                            <h3 className="channel__user-name">Food & Drink</h3>
                            <span className="views">245K subscribed</span>
                        </div>

                        <button className="video-info-btn btn-icon" type="button">Subscribe 2.3m</button>
                    </div>

                    <div className="channel__nested-link-wrapper">
                        <ul className="channel__nested-list">
                            <li className="channel__nested-item">
                                <NavLink className="channel__nested-link" activeClassName="active-link" to="/channel/" exact>Home</NavLink>
                            </li>

                            <li className="channel__nested-item">
                                <NavLink className="channel__nested-link" activeClassName="active-link" to="/channel/videos">Videos</NavLink>
                            </li>

                            <li className="channel__nested-item">
                                <NavLink className="channel__nested-link" activeClassName="active-link" to="/channel/playlists">Playlists</NavLink>
                            </li>

                            <li className="channel__nested-item">
                                <NavLink className="channel__nested-link" activeClassName="active-link" to="/channel/channels">Channels</NavLink>
                            </li>

                            <li className="channel__nested-item">
                                <NavLink className="channel__nested-link" activeClassName="active-link" to="/channel/discussion">Discussion</NavLink>
                            </li>

                            <li className="channel__nested-item">
                                <NavLink className="channel__nested-link" activeClassName="active-link" to="/channel/about">About</NavLink>
                            </li>

                            <li className="channel__nested-item">
                                <input type="text" />
                                <span>
                                    <img src={search} alt="" />
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="channel__middle">
                        <div className="channel__middle-left middle-left">
                            <img className="channel-img" src={channel_img} alt="channel-avatar" />
                            <div className="middle-left__info">
                                <h3 className="middle-left__info-title">Choosing The Best Audio Player Software For Your Computer</h3>
                                <p className="middle-left__info-text">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>
                                <span className="middle-left__info-views views">11k views  ·  6 months ago</span>
                            </div>
                        </div>

                        <div className="channel__middle-right middle-right">
                            <span className="middle-right__title views">Recommended channel</span>
                            <ul className="middle-right__list">
                                <li className="middle-right__item">
                                    <Link className="middle-right__item-link" to="/channel">
                                        <img className="middle-right__item-link-img" src={toga} alt="user-avatar" />
                                        <h4 className="middle-right__item-link-title">Flora Benson</h4>
                                    </Link>
                                </li>

                                <li className="middle-right__item">
                                    <Link className="middle-right__item-link" to="/channel">
                                        <img className="middle-right__item-link-img" src={toga} alt="user-avatar" />
                                        <h4 className="middle-right__item-link-title">Flora Benson</h4>
                                    </Link>
                                </li>

                                <li className="middle-right__item">
                                    <Link className="middle-right__item-link" to="/channel">
                                        <img className="middle-right__item-link-img" src={toga} alt="user-avatar" />
                                        <h4 className="middle-right__item-link-title">Flora Benson</h4>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="channel-list-wrapper">
                        <h3 className="channel-list-title">Margaret Phelps videos</h3>
                        {items.length > 0 &&
                            <ul className="channel-list">
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
            </div>
        </>
    )
}

export default Channel;