import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getToken from "../functions/getToken";

// Icons
// Icons
import { User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// My Components
import UserSuggestCard from "./UserSuggestCard";
import HeartComponent from "./HeartComponent";

function Feed({ loggedInUser, setLoggedInUser }) {
	const userId = getToken(loggedInUser);

	const [following, setFollowing] = useState([]);
	const [userData, setUserData] = useState([]);
	const [errors, setErrors] = useState([]);

	useEffect(() => {
		const fetchAllFollowing = async () => {
			try {
				const response = await fetch(
					`http://localhost:8080/api/follow/following/${userId}`
				);
				if (response.ok) {
					const data = await response.json();
					console.log("Following", data);
					setFollowing(data);
				} else {
					const errorData = await response.json();
					setErrors([errorData.message || "Failed to fetch user data."]);
				}
			} catch (err) {
				setErrors([err.message || "An error occurred."]);
				console.error("Fetch Error:", err);
			}
		};

		fetchAllFollowing();
	}, [userId]);

	useEffect(() => {
		const fetchAllFollowingClips = async () => {
			try {
				const clips = following.map(async (follow) => {
					const response = await fetch(
						`http://localhost:8080/api/clip/user/${follow.following.userId}`
					);
					if (response.ok) {
						return await response.json();
					} else {
						console.error("Something went wrong fetching clips.");
					}
				});

				const clipsArr = await Promise.all(clips);

				const clipsFeed = clipsArr.flat();
				setUserData(clipsFeed);
				console.log(clipsFeed);
			} catch (err) {
				setErrors([err.message || "An error occurred."]);
				console.error("Fetch Error:", err);
			}
		};

		if (following.length > 0) {
			fetchAllFollowingClips();
		}
	}, [following]);

	return (
		<div className="col-span-1 border-2 rounded m-1">
			<h2 className="text-center">Main Feed</h2>

			{userData.length < 1 ? (
				<div className="w-full p-4 text-center">
					<p className="text-lg text-gray-500">
						No clips available at the moment.
					</p>
				</div>
			) : (
				userData.map(
					({
						userId,
						profilePicture,
						mediaUrl,
						caption,
						clipId,
						userProfile,
					}) => (
						<div key={clipId} className="w-full p-4">
							<div className="border-2 rounded-2xl border-secondary p-4">
								<Link
									to={`http://localhost:5173/profile/${userProfile.userId}`}
								>
									{" "}
									<h1 className="text-2xl font-bold">{userProfile.username}</h1>
									<Avatar className="">
										<AvatarImage
											src={
												userProfile.profilePicture
													? userProfile.profilePicture
													: null
											}
											alt={`@${userProfile.username}`}
										/>
										<AvatarFallback>
											<User />
										</AvatarFallback>
									</Avatar>
								</Link>
								<iframe
									width="100%"
									height="640"
									src={mediaUrl}
									title={caption || `Clip ${clipId}`}
									allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									className="max-w-full"
								></iframe>
								<p>{caption}</p>
								<p className="transition-transform hover:scale-105">
									<HeartComponent />
								</p>
							</div>
						</div>
					)
				)
			)}
		</div>
	);
}

export default Feed;
