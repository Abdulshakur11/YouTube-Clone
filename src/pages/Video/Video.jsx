import "./Video.scss";
import { Link } from "react-router-dom";
import channel_user from "../../assets/images/blair.png";
import { useContext } from "react";
import { Context } from "../../Context/ApiContext/ApiContext";
import { useParams } from "react-router-dom";
import More from "../../Library/More";
import VIdeoItem from "../../Components/VideoItem/VideoItem";



function Video() {
    const { items } = useContext(Context);

    const params = useParams();
    let title = '';
    if (params.id && items.length >= 1) {
        title = items.find((item) => item.id !== params.id)
    }

    return (
        <>
            <div className="video-page">


                <div className="iframe-wrapper">
                    <iframe className="iframe-video" width="1000" height="506" src="https://www.youtube.com/embed/Ig8wA28PAeo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                    <h3 className="video-title">{title.title}</h3>
                    <div className="video-like-wrapper">
                        <span className="views">8 000 000 000 views</span>

                        <ul className="like-list">
                            <li className="like-item">
                                <span>50 mln</span>
                            </li>

                            <li className="like-item">
                                <span>1 k</span>
                            </li>

                            <li className="like-item">
                                <span>Share</span>
                            </li>

                        </ul>
                        <button className="more">
                            <More className="more-icon" />
                        </button>
                    </div>

                    <div className="video-info-wrapper">
                        <div className="video-info">
                            <Link className="video-info-channel-link" to="/channel">
                                <img className="video-info-img" src={channel_user} alt="chennel-avatar" />
                                <div>
                                    <h4 className="video-info-title">Food & Drink</h4>
                                    <span className="views">Published on 14 Jun 2019</span>
                                </div>
                            </Link>
                            <p className="video-info-text">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
                            <Link to="/" className="video-info-link">Show more</Link>
                        </div>
                        <button className="video-info-btn" type="button">Subscribe 2.3m</button>
                    </div>

                </div>

                <div>
                    <div className="video-page-list-title-wrapper">
                        <h3 className="video-page-list-title">Next</h3>
                        <div className="checkbox-wrapper">
                            <label className="form-check-label label" htmlFor="flexSwitchCheckDefault">Autoplay</label>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                            </div>

                        </div>
                    </div>
                    {items.length > 0 &&
                        <ul className="video-list">
                            {
                                items.map((item) => {
                                    return (
                                        <VIdeoItem key={item.id} title={item.title} id={item.id} url={item.url} />
                                    )
                                })
                            }
                        </ul>}
                </div>


            </div>
        </>
    )
}

export default Video;

