import { jwtDecode } from "jwt-decode";

function getUserIdFromToken(loggedInUser) {
	if (!loggedInUser || !loggedInUser.jwt) return null;
	const decodedToken = jwtDecode(loggedInUser.jwt);
	return decodedToken.userId || null;
}

export default getUserIdFromToken;
