import React from "react";
import { Link } from "react-router-dom";

import HeaderOne from "@/components/HeaderOne";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuLink,
} from "@/components/ui/navigation-menu";

// 			<main className="grid min-h-full place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">

function LandingPage() {
	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center">
			<HeaderOne />
			<Hero />
		</div>
	);
}

export default LandingPage;
