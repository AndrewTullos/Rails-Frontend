import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Icons
import Heart from "../components/HeartComponent";

// ShadCN
import { SidebarProvider } from "@/components/ui/sidebar";

// My Components
import HeaderTwo from "@/components/HeaderTwo";
import { AppSidebar } from "@/components/AppSidebar";
import Footer from "../components/Footer";

import UserProfileCard from "@/components/UserProfileCard";
import Clip from "@/components/Clip";

function ProfilePage({ className, loggedInUser, setLoggedInUser }) {
	const { profileId } = useParams();
	const [user, setUser] = useState([]);
	const [userData, setUserData] = useState([]);
	const [errors, setErrors] = useState([]);

	useEffect(() => {
		if (!profileId) {
			setErrors(["User ID is missing."]);
			return;
		}
		``;
		const fetchUserProfile = async () => {
			try {
				const response = await fetch(
					`http://localhost:8080/api/user/${profileId}`
				);
				if (response.ok) {
					const data = await response.json();
					setUser(data);
				} else {
					const errorData = await response.json();
					setErrors([errorData.message || "Failed to fetch user data."]);
				}
			} catch (err) {
				setErrors([err.message || "An error occurred."]);
				console.error("Fetch Error:", err);
			}
		};
	}, [profileId]);

	useEffect(() => {
		if (!profileId) {
			setErrors(["User ID is missing."]);
			return;
		}

		const fetchUserClips = async () => {
			try {
				const response = await fetch(
					`http://localhost:8080/api/clip/user/${profileId}`
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

		fetchUserClips();
	}, [profileId]);

	return (
		<SidebarProvider>
			<AppSidebar className="bg-primary text-secondary" />
			<div className="min-h-screen w-full text-white flex flex-col">
				<HeaderTwo
					loggedInUser={loggedInUser}
					setLoggedInUser={setLoggedInUser}
				/>
				<UserProfileCard
					loggedInUser={loggedInUser}
					setLoggedInUser={setLoggedInUser}
				/>
				<div>
					<h2 className="text-center">Clips</h2>

					<div className="flex flex-wrap">
						{userData.map(({ mediaUrl, caption, clipId }) => (
							<div key={clipId} className="w-full sm:w-1/2 md:w-1/3 p-4">
								<div className="border-2 rounded-2xl border-secondary p-4">
									<iframe
										width="360"
										height="640"
										src={mediaUrl}
										title="test"
										allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
									<p>{caption}</p>

									<p className="object-cover transition-transform group-hover:scale-105">
										<Heart />
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<Footer />
			</div>
		</SidebarProvider>
	);
}

export default ProfilePage;
