import React from "react";
import { Link } from "react-router-dom";
import { Video } from "lucide-react";

function Footer() {
	return (
		<footer className="border-t py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="flex gap-2">
						<Video className="stroke-white h-5 w-5" />
						<span className=" text-white font-bold">Rails App</span>
					</div>
					<div className="flex items-center gap-6">
						<Link href="#" className="text-sm text-gray-300 hover:underline">
							Terms
						</Link>
						<Link href="#" className="text-sm text-gray-300 hover:underline">
							Privacy
						</Link>
						<Link href="#" className="text-sm text-gray-300 hover:underline">
							Contact
						</Link>
					</div>
					<div className="text-sm text-gray-300">
						© 2025 Rails App. All rights reserved.
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
