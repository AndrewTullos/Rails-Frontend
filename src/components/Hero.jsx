import React from "react";
import { Link } from "react-router-dom";

import prod from "../assets/prod.mp4";
import girl from "../assets/girl.mp4";
import sloppy from "../assets/sloppy.mp4";

import { Button } from "./ui/button";
import { ArrowRight, Play, Video, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Hero() {
	return (
		<main className="flex-1 items-center justify-center min-h-screen w-full">
			{/* NEW HERO */}
			<section className="relative">
				<div className="mx-auto max-w-7xl">
					<div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
						<div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0 ">
							<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl bg-transparent">
								{/* Blob */}
								<div
									className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
									aria-hidden="true"
								>
									<div
										className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
										style={{
											clipPath:
												"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
										}}
									></div>
								</div>
								{/* Blob */}
								<div className="hidden sm:mb-10 sm:flex">
									<div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-100 ring-1 ring-gray-100 hover:ring-indigo-400/70 bg-black ">
										Only the highlights. Only the best.{"  "}
										<Link
											to="/"
											className="whitespace-nowrap font-semibold text-indigo-600"
										>
											<span aria-hidden="true" className="absolute inset-0" />
											Read more <span aria-hidden="true">&rarr;</span>
										</Link>
									</div>
								</div>
								<h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-100 sm:text-7xl">
									Share your best moments with the world
								</h1>
								{/* <h3 className="text-pretty text-base font-semibold tracking-tight text-gray-200 sm:text-3xl">
									The Smart Way{" "}
								</h3> */}
								<p className="mt-8 text-pretty text-lg font-medium text-gray-50 sm:text-xl/8">
									Upload, share, and discover amazing video clips and images
									from sessions. Connect with others through likes and comments.
								</p>
								<div className="mt-10 flex items-center gap-x-6">
									<Link
										to="/signup"
										className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										Get started
									</Link>
									<Link
										to="/about"
										className="text-sm/6 font-semibold text-gray-100"
									>
										Learn more <span aria-hidden="true">→</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* BG Video */}
				<div className="bg-transparent lg:absolute lg:inset-y-10 lg:right-1 lg:w-1/4">
					<video
						alt="Nollie Heelflip"
						width="640"
						height="360"
						className="drop-shadow-lg rounded-lg aspect-[3/2] object-contain lg:aspect-auto lg:size-full"
						controls-hidden
						loop
						autoPlay
						muted
					>
						<source src={girl} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>

				{/* BG Video */}
				<div className="bg-transparent lg:absolute lg:inset-y-60 lg:right-60 lg:w-1/4">
					<video
						alt="Nollie Heelflip"
						width="640"
						height="360"
						className="drop-shadow-lg rounded-lg aspect-[3/2] object-contain lg:aspect-auto lg:size-full"
						controls-hidden
						loop
						autoPlay
						muted
					>
						<source src={sloppy} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>

				{/* First video */}
				<div className="bg-transparent lg:absolute lg:inset-y-10 lg:right-100 lg:w-1/2">
					<video
						alt="Nollie Heelflip"
						width="640"
						height="360"
						className="drop-shadow-lg rounded-lg aspect-[3/2] object-contain lg:aspect-auto lg:size-full"
						controls-hidden
						loop
						autoPlay
						muted
					>
						<source src={prod} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</section>

			{/* FEATURES */}
			<section id="features" className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12 text-white">
						Features
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-primary text-secondary p-6 rounded-lg shadow-sm">
							<div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
								<Video className="h-6 w-6 text-secondary" />
							</div>
							<h3 className="text-xl font-bold mb-2">Share Clips</h3>
							<p className="text-gray-600">
								Upload and share your favorite video clips and images from your
								sessions.
							</p>
						</div>
						<div className="bg-primary text-secondary p-6 rounded-lg shadow-sm">
							<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-6 w-6 text-secondary"
								>
									<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
								</svg>
							</div>
							<h3 className="text-xl font-bold mb-2">Like Content</h3>
							<p className="text-gray-600">
								Show appreciation for content you enjoy by liking clips from
								other users.
							</p>
						</div>
						<div className="bg-primary text-secondary p-6 rounded-lg shadow-sm">
							<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-6 w-6 text-secondary"
								>
									<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
								</svg>
							</div>
							<h3 className="text-xl font-bold mb-2">Comment</h3>
							<p className="text-gray-600">
								Engage with the community by commenting on clips and starting
								conversations.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section id="testimonials" className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12 text-white">
						What Our Users Say
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white p-6 rounded-lg border">
							<div className="flex items-center gap-4 mb-4">
								<Avatar className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden cursor-pointer">
									<AvatarImage
										src="/placeholder.svg?height=32&width=32"
										alt="@user"
									/>
									<AvatarFallback>
										<User stroke="black" className="h-5 w-5" />
									</AvatarFallback>
								</Avatar>
								<div>
									<h4 className="font-bold">The 9 Club</h4>
									<p className="text-sm text-gray-600">Skate Podcast</p>
								</div>
							</div>
							<p className="text-gray-600">
								"Finally this website exist, finally someone put skateboarders
								first when making this technology."
							</p>
						</div>

						<div className="bg-white p-6 rounded-lg border">
							<div className="flex items-center gap-4 mb-4">
								<Avatar className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden cursor-pointer">
									<AvatarImage
										src="/placeholder.svg?height=32&width=32"
										alt="@user"
									/>
									<AvatarFallback>
										<User stroke="black" className="h-5 w-5" />
									</AvatarFallback>
								</Avatar>
								<div>
									<h4 className="font-bold">Skate IQ Guy</h4>
									<p className="text-sm text-gray-600">Skate Instructor</p>
								</div>
							</div>
							<p className="text-gray-600">
								"Rails has transformed how I share my sessions with clients. The
								ability to upload clips and get feedback has been invaluable for
								my business."
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg border">
							<div className="flex items-center gap-4 mb-4">
								<Avatar className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden cursor-pointer">
									<AvatarImage
										src="/placeholder.svg?height=32&width=32"
										alt="@user"
									/>
									<AvatarFallback>
										<User stroke="black" className="h-5 w-5" />
									</AvatarFallback>
								</Avatar>
								{/* <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
									<img
										src="/placeholder.svg?height=48&width=48"
										alt="User"
										width={48}
										height={48}
									/>
								</div> */}
								<div>
									<h4 className="font-bold">Torey Pudwell</h4>
									<p className="text-sm text-gray-600">Skate Enthusiast</p>
								</div>
							</div>
							<p className="text-gray-600">
								"I love being able to share my skate highlights and get comments
								from friends. The platform is super easy to use and the
								engagement is great!"
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section id="cta" className="py-20 border-t-2">
				<div className="container mx-auto text-center px-4">
					<h2 className="text-3xl font-bold mb-6">
						Ready to share your clips?
					</h2>
					<p className="max-w-2xl mx-auto mb-8">
						Join thousands of users who are already sharing their best moments
						on Rails.
					</p>
					<Link href="/signup">
						<Button size="lg" variant="secondary">
							Sign Up Now
						</Button>
					</Link>
				</div>
				{/* Blob */}
				<div
					className="absolute inset-x-90 top-[800px] -z-10 transform-gpu overflow-hidden blur-3xl"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/3 bg-linear-to-tr from-[#ff80b5] to-[#e8a337] opacity-70 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					></div>
				</div>
				{/* Blob */}
			</section>
		</main>
	);
}

export default Hero;
