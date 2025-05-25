import React, { useState, useEffect } from "react";
import getToken from "../functions/getToken";

// ShadCN

// My Components
import Navbar from "./Navbar";

function HeaderTwo({ loggedInUser, setLoggedInUser, children }) {
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

	return (
		<header className="w-full sticky top-0 z-10 border-b">
			<Navbar
				loggedInUser={loggedInUser}
				setLoggedInUser={setLoggedInUser}
				children={children}
			/>
		</header>
	);
}

export default HeaderTwo;
