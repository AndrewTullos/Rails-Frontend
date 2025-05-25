import { Link } from "react-router-dom";

export function SignOut({ setLoggedInUser }) {
	const handleSubmit = () => {
		localStorage.removeItem("loggedInUser");
		setLoggedInUser(null);
	};

	return (
		<Link to="/" variant="outline" onClick={handleSubmit}>
			Sign Out
		</Link>
	);
}
