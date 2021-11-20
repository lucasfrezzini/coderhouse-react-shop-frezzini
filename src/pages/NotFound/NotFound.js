import './NotFound.scss';
import CategoryListContainer from "../CategoryListContainer/CategoryListContainer";
import { Link } from "react-router-dom";

function NotFound() {
  return (
		<>
    <div className="NotFound">
			<div className="container">
				<h1>404 Page Not Found</h1>
				<p>The page you were looking for does not exist. <Link to="/category">Click here</Link> to continue shopping.</p>
			</div>
		</div>
		<CategoryListContainer />
		</>
  );
}

export default NotFound;
