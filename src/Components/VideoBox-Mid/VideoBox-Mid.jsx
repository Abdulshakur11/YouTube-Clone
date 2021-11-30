import { Link } from "react-router-dom";
import "./VideoBox-Mid.scss";

 
function VIdeoBox({ title, id, url }) {
    return (
        <>
            <li className="video-box-mid">
                <Link className="video-box__link" to={"/video/" + id}>
                    <img className="video-box-mid__img" src={url} alt="" width="250" height="150" />
                    <h3 id={id} className="video-box__title">{title}</h3>
                    <div className="video-box__view-wrappr">
                        <span className="views">80k views  ·  3 days ago</span>
                        <span className="name-of-user">Dollie Blair</span>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default VIdeoBox;