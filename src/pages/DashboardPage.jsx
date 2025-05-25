import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// ShadCN
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// My Components
import HeaderTwo from "@/components/HeaderTwo";
import { AppSidebar } from "@/components/AppSidebar";
import Footer from "../components/Footer";

import Feed from "@/components/Feed";
import UserSuggestions from "@/components/UserSuggestions";

function DashboardPage({ loggedInUser, setLoggedInUser, children }) {
	const navigate = useNavigate();

	useEffect(() => {
		if (!loggedInUser) {
			navigate("/login");
		}
	}, [loggedInUser, navigate]);

	return (
		<SidebarProvider>
			<AppSidebar className="bg-primary text-secondary" />

			<div className="min-h-screen w-full text-white flex flex-col">
				<HeaderTwo
					loggedInUser={loggedInUser}
					setLoggedInUser={setLoggedInUser}
				/>

				<div className="grid grid-cols-[1fr_0.2fr] gap-4 border-2 rounded m-1">
					<Feed loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
					<UserSuggestions
						loggedInUser={loggedInUser}
						setLoggedInUser={setLoggedInUser}
					/>
				</div>
				<Footer />
			</div>
		</SidebarProvider>
	);
}

export default DashboardPage;
