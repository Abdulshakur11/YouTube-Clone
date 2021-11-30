import { Link } from "react-router-dom";
import "./arror.scss";

function Arror () {
    return (
          <>
            <div className="arror-page">
                <h1 className="arror-page__title">The page is not ready yet!</h1>
                <Link to="/">Back</Link>
            </div>
          </>
    )
}

export default Arror