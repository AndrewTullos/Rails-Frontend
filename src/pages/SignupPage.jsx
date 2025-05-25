import React from "react";
import { Link } from "react-router-dom";
import { Video, GalleryVerticalEnd } from "lucide-react";

import { SignupForm } from "@/components/Signup-Form";

export default function LoginPage({ loggedInUser, setLoggedInUser }) {
	return (
		<div className="grid min-h-svh lg:grid-cols-2">
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex justify-center gap-2 md:justify-start">
					<Link
						to="/"
						className="flex items-center gap-2 font-medium text-white"
					>
						<div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
							<Video className="size-4" />
							{/* <GalleryVerticalEnd className="size-4" /> */}
						</div>
						Rails App
					</Link>
				</div>
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-xs">
						<SignupForm
							loggedInUser={loggedInUser}
							setLoggedInUser={setLoggedInUser}
						/>
					</div>
				</div>
			</div>
			<div className="relative hidden bg-muted lg:block object-center">
				<img
					src="https://images.pexels.com/photos/3809793/pexels-photo-3809793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					alt="Skater"
					className="relative inset-0 h-full w-full object-top dark:brightness-[0.2] dark:grayscale"
				/>
			</div>
		</div>
	);
}
