import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import getToken from "../functions/getToken";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Plus, Bell, Search, Video, User } from "lucide-react";

// ShadCN
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "./mode-toggle";

// My Components
import { SignOut } from "./SignOut";

export default function Navbar({ loggedInUser, setLoggedInUser, children }) {
	const navigate = useNavigate();
	const [userData, setUserData] = useState([]);

	function upload() {
		navigate("/upload");
	}

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
		<header className="flex h-20 w-full sticky top-0 z-10 shrink-0 items-center px-4 md:px-6 bg-secondary">
			{/* Small Screens */}
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="lg:hidden">
						<MenuIcon className="h-6 w-6" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>

				<SheetContent side="left">
					{/* LOGO */}
					{/* <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}> */}
					<Link
						to="/dashboard"
						className="flex items-center gap-2 font-semibold"
					>
						<Video className="h-6 w-6" />
						<span className="text-xl font-bold m-1">Rails App</span>
					</Link>
					<div className="grid gap-2 py-6">
						<Link
							href="#"
							className="flex w-full items-center py-2 text-lg font-semibold"
							prefetch={false}
						>
							Home
						</Link>
						<Link
							href="#"
							className="flex w-full items-center py-2 text-lg font-semibold"
							prefetch={false}
						>
							About
						</Link>
						<Link
							href="#"
							className="flex w-full items-center py-2 text-lg font-semibold"
							prefetch={false}
						>
							Services
						</Link>
						<Link
							href="#"
							className="flex w-full items-center py-2 text-lg font-semibold"
							prefetch={false}
						>
							Contact
						</Link>

						{/* NEW CLIP */}
						<Button
							variant="default"
							size="sm"
							className="gap-1 text-white hover:text-black bg-indigo-700"
							onClick={upload}
						>
							<Plus className="h-4 w-4" />
							{/* <Link to="/upload">
								<span className="hidden sm:inline">New Clip</span>
							</Link> */}
						</Button>
					</div>
				</SheetContent>
			</Sheet>

			{/* Large Screen */}
			{/* LOGO */}
			{/* <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}> */}
			<SidebarTrigger className="" />
			{/* {children} */}
			<Link to="/dashboard" className="flex items-center gap-2 font-semibold ">
				<Video className="h-6 w-6" />
				<span className="text-xl font-bold">Rails App</span>
				{/* <MountainIcon className="h-6 w-6" /> */}
			</Link>
			<nav className="ml-auto hidden lg:flex gap-6">
				<div className="relative hidden md:block">
					<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
					<Input
						type="search"
						placeholder="Search clips..."
						className="w-[200px] pl-8 md:w-[300px] lg:w-[400px]"
					/>
				</div>
				<ModeToggle />
				<Button variant="outline" size="icon" className="relative bg-primary">
					<Bell stroke="white" className="h-5 w-5" />
					<span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
						3
					</span>
				</Button>

				{/* NEW CLIP */}
				<Button
					variant="default"
					size="sm"
					className="gap-1 text-white hover:text-black bg-indigo-700"
				>
					<Plus className="h-4 w-4" />
					<Link to={"/upload"}>
						<span className="hidden sm:inline">New Clip</span>
					</Link>
				</Button>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Avatar className="h-8 w-8 cursor-pointer">
							<AvatarImage src={userData.profilePicture} alt="@user" />
							<AvatarFallback>
								<User stroke="white" className="h-5 w-5" />
							</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56">
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<Link to={`/profile/${loggedInUser.userId}`}>Profile</Link>
								<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
							</DropdownMenuItem>

							<DropdownMenuItem>
								Settings
								<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuGroup>

						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Link to={"https://github.com/AndrewTullos/"}>GitHub</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>Support</DropdownMenuItem>
						<DropdownMenuItem disabled>API</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<SignOut />
							<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</nav>
		</header>
	);
}

function MenuIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}
