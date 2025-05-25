import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

// My Components
function UserSuggestCard({ user }) {
	const [errors, setErrors] = useState([]);

	return (
		<section className="w-full border-b text-white">
			<div className="container mx-auto flex items-center justify-between p-4">
				<div className="flex items-center gap-4">
					<div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
						<Avatar className="h-16 w-16 sm:h-16 sm:w-16">
							<AvatarImage
								src={user.profilePicture ? user.profilePicture : null}
								alt={`@${user.username}`}
							/>
							<AvatarFallback>
								<User />
							</AvatarFallback>
						</Avatar>
						<div className="flex flex-1 flex-col items-center gap-4 text-center sm:items-start sm:text-left">
							<div>
								<h1 className="text-2xl font-bold">{user.username}</h1>
								<p className="text-muted-foreground">
									{user.firstName + " " + user.lastName}
								</p>
							</div>
							<div className="flex gap-4 text-sm"></div>
							<p className="max-w-md">I skate!</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default UserSuggestCard;
