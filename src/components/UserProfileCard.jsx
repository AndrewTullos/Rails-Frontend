import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import getToken from "../functions/getToken";

// Icons
import {
	User,
	Settings,
	Grid,
	Bookmark,
	Heart,
	MessageCircle,
} from "lucide-react";

// ShadCn
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import FollowButton from "./FollowButton";

// My Components
function UserProfileCard({ loggedInUser, setLoggedInUser }) {
	const { profileId } = useParams();
	const [userData, setUserData] = useState({});
	const [errors, setErrors] = useState([]);

	const userId = getToken(loggedInUser);

	useEffect(() => {
		if (!profileId) {
			setErrors(["User ID is missing."]);
			return;
		}

		const fetchUserData = async () => {
			try {
				const response = await fetch(
					`http://localhost:8080/api/user/${profileId}`
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
			}
		};

		fetchUserData();
	}, [profileId]);

	return (
		<section className="w-full border-b text-white">
			<div className="container mx-auto flex items-center justify-between p-4">
				<div className="flex items-center gap-4">
					<div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
						<Avatar className="h-24 w-24 sm:h-32 sm:w-32">
							<AvatarImage
								src={userData.profilePicture ? userData.profilePicture : null}
								alt={`@${userData.username}`}
							/>
							<AvatarFallback>
								<User />
							</AvatarFallback>
						</Avatar>
						<div className="flex flex-1 flex-col items-center gap-4 text-center sm:items-start sm:text-left">
							<div>
								<h1 className="text-2xl font-bold">{userData.username}</h1>
								<p className="text-muted-foreground">
									{userData.firstName + " " + userData.lastName}
								</p>
							</div>
							<div className="flex gap-4 text-sm">
								<div>
									<span className="font-bold">124</span> posts
								</div>
								<div>
									<span className="font-bold">1.2k</span> followers
								</div>
								<div>
									<span className="font-bold">567</span> following
								</div>
							</div>
							<p className="max-w-md">I skate!</p>
							{userId != profileId ? (
								<FollowButton
									loggedInUser={loggedInUser}
									setLoggedInUser={setLoggedInUser}
								/>
							) : (
								<Button variant="outline">
									Settings
									<span className="sr-only">Settings</span>
									<Settings className="h-4 w-4" />
								</Button>
							)}
						</div>
					</div>
				</div>
				<div className="flex gap-2 sm:self-start hidden sm:block"></div>
			</div>
		</section>
	);
}

export default UserProfileCard;
