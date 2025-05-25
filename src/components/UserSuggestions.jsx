import React, { useState, useEffect } from "react";
import getToken from "../functions/getToken";
import { Link } from "react-router-dom";

// My Components
import UserSuggestCard from "./UserSuggestCard";

function UserSuggestions({ loggedInUser, setLoggedInUser }) {
	const [userData, setUserData] = useState([]);
	const [suggestedUsers, setSuggestedUsers] = useState([]);
	const [errors, setErrors] = useState([]);

	const userId = getToken(loggedInUser);

	useEffect(() => {
		if (!userId) {
			setErrors(["User ID is missing."]);
			return;
		}

		const fetchUserData = async () => {
			try {
				const response = await fetch(
					`http://localhost:8080/api/user/${userId}`
				);

				if (response.ok) {
					const data = await response.json();
					setUserData(data);
				} else {
					const errorData = await response.json();
					setErrors([errorData.message || "Failed to fetch user data."]);
				}
			} catch (err) {
				setErrors([err.message || "An error occurred."]);
				console.error("Fetch Error:", err);
			}
		};

		fetchUserData();
	}, [userId]);

	const userCity = userData.city;
	const encodedCity = encodeURIComponent(userCity);

	useEffect(() => {
		if (!userCity) {
			setErrors(["User City is missing."]);
			return;
		}

		const fetchSuggestedUsersByCity = async () => {
			try {
				const response = await fetch(
					`http://localhost:8080/api/user/all/${encodedCity}`
				);

				if (response.ok) {
					const data = await response.json();

					setSuggestedUsers(data);
				} else {
					const errorData = await response.json();
					setErrors([
						errorData.message || "Failed to fetch suggested user data.",
					]);
				}
			} catch (err) {
				setErrors([err.message || "An error occurred."]);
			}
		};

		fetchSuggestedUsersByCity();
	}, [userCity]);

	return (
		<div className="col-span-1 border-2 rounded m-1">
			<div>
				<h2 className="text-center">Suggested Users</h2>
				<h3 className="text-center">{userCity}</h3>
				{suggestedUsers
					.filter((user) => user.userId !== loggedInUser.userId)
					.map((user) => (
						<Link key={user.userId} to={`/profile/${user.userId}`}>
							<div className="border-2 rounded-2xl">
								<UserSuggestCard user={user} />
							</div>
						</Link>
					))}
			</div>
		</div>
	);
}

export default UserSuggestions;
