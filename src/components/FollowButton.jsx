import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import getToken from "../functions/getToken";

import { Button } from "./ui/button";

function FollowButton({ loggedInUser, setLoggedInUser }) {
	const [errors, setErrors] = useState([]);
	const [follower, setFollower] = useState([]);
	const [following, setFollowing] = useState([]);

	const userId = getToken(loggedInUser);
	const { profileId } = useParams();

	useEffect(() => {
		if (!userId) {
			setErrors(["User ID is missing."]);
			return;
		}

		const fetchFollower = async () => {
			try {
				const response = await fetch(
					`http://localhost:8080/api/user/${userId}`
				);

				if (response.ok) {
					const data = await response.json();
					setFollower(data);
				} else {
					const errorData = await response.json();
					setErrors([errorData.message || "Failed to fetch user data."]);
				}
			} catch (err) {
				setErrors([err.message || "An error occurred."]);
			}
		};

		fetchFollower();
	}, [userId]);

	useEffect(() => {
		if (!profileId) {
			setErrors(["User ID is missing."]);
			return;
		}

		const fetchFollowing = async () => {
			try {
				const response = await fetch(
					`http://localhost:8080/api/user/${profileId}`
				);

				if (response.ok) {
					const data = await response.json();
					setFollowing(data);
				} else {
					const errorData = await response.json();
					setErrors([errorData.message || "Failed to fetch user data."]);
				}
			} catch (err) {
				setErrors([err.message || "An error occurred."]);
			}
		};

		fetchFollowing();
	}, [profileId]);

	const handleFollow = async () => {
		if (!profileId && !userId) {
			setErrors(["Both User ID's are missing."]);
			return;
		}

		try {
			const response = await fetch(`http://localhost:8080/api/follow`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					follower,
					following,
				}),
			});

			if (response.ok) {
				const data = await response.json();
				alert("Success");
			} else {
				const errorData = await response.json();
				alert("You are already following this user.");
				setErrors([errorData.message || "Failed to fetch user data."]);
			}
		} catch (err) {
			setErrors([err.message || "An error occurred."]);
		}
	};

	return (
		<div>
			<Button onClick={handleFollow} className="bg-indigo-600 text-white">
				Follow
			</Button>
		</div>
	);
}

export default FollowButton;
