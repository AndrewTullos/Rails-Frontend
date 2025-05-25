import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm({
	className,
	loggedInUser,
	setLoggedInUser,
	...props
}) {
	const navigate = useNavigate();

	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	const [errors, setErrors] = useState([]);

	const handleSubmit = (event) => {
		event.preventDefault();

		fetch("http://localhost:8080/api/user/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		}).then((response) => {
			if (response.status >= 200 && response.status < 300) {
				response.json().then((fetchedUser) => {
					const user = jwtDecode(fetchedUser.jwt);
					user.jwt = fetchedUser.jwt;
					setLoggedInUser(user);
					localStorage.setItem("loggedInUser", JSON.stringify(user));
					navigate("/dashboard");
				});
			} else {
				response.json().then((fetchedErrors) => setErrors(fetchedErrors));
			}
		});
	};

	const handleChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">Login</CardTitle>
					<CardDescription>
						Enter your username below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit}>
						<div className="flex flex-col gap-6">
							{errors.length > 0 && (
								<div className="text-red-500">
									{errors.map((error, index) => (
										<p key={index}>{error}</p>
									))}
								</div>
							)}
							<div className="grid gap-2">
								<Label htmlFor="username">Username</Label>
								<Input
									id="username"
									name="username"
									type="username"
									value={user.username}
									placeholder="Enter your username..."
									onChange={handleChange}
									required
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
									<Link
										href="#"
										className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
									>
										Forgot your password?
									</Link>
								</div>
								<Input
									id="password"
									name="password"
									type="password"
									value={user.password}
									onChange={handleChange}
									required
								/>
							</div>
							<Button type="submit" className="w-full">
								Login
							</Button>
							<Button variant="outline" className="w-full">
								Login with Google
							</Button>
						</div>
						<div className="mt-4 text-center text-sm">
							Don&apos;t have an account?{" "}
							<Link to="/signup" className="underline underline-offset-4">
								Sign up
							</Link>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
