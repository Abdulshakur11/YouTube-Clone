import { Link } from "react-router-dom";


function VIdeoItem({ title, id, url }) {
    return (
        <>
            <li className="video__item" >
                <Link className="video-box__link" to={"/video/" + id}>
                    <img className="video__item-img" src={url} alt="" width="250" height="150" />
                    <h3 id={id} className="video-box__title">{title}</h3>
                    <div className="video__item-view-wrapper">
                        <span className="views">80k views </span>
                        <span className="name-of-user ">Dollie Blair</span>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default VIdeoItem;