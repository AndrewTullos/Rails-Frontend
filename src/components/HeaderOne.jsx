import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Video } from "lucide-react";

function HeaderOne() {
	return (
		<header className="w-full border-b text-white">
			<div className="container mx-auto flex items-center justify-between py-4">
				{/* Left: Logo */}
				<Link to={"/"} className="flex items-center gap-2">
					<Video className="h-6 w-6" />
					<span className="text-xl font-bold">Rails App</span>
				</Link>
				<nav className="hidden md:flex items-center gap-6 ">
					<Link to="#features" className="text-sm font-medium hover:underline">
						Features
					</Link>
					<Link
						to="#testimonials"
						className="text-sm font-medium hover:underline"
					>
						Testimonials
					</Link>
					<Link to="#pricing" className="text-sm font-medium hover:underline">
						Pricing
					</Link>
				</nav>
				<div className="flex items-center gap-4 ">
					<Link to="/login" className="text-sm font-medium hover:underline">
						Login
					</Link>
					<Link to="/signup">
						<Button className="rounded-md text-white bg-indigo-600">
							Sign Up
						</Button>
					</Link>
				</div>
			</div>
		</header>
	);
}

export default HeaderOne;
