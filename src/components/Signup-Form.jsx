import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignupForm({
	className,
	loggedInUser,
	setLoggedInUser,
	...props
}) {
	const navigate = useNavigate();

	const [user, setUser] = useState({
		username: "",
		email: "",
		password: "",
		profilePicture: null,
		firstName: "",
		lastName: "",
		city: "",
		state: "",
		postalCode: "",
	});

	const [errors, setErrors] = useState([]);

	const handleSubmit = (event) => {
		event.preventDefault();

		fetch("http://localhost:8080/api/user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		}).then((response) => {
			if (response.ok) {
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
		<form
			onSubmit={handleSubmit}
			className={cn("flex flex-col gap-6 text-white", className)}
			{...props}
		>
			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="text-2xl font-bold">Register your account</h1>
				<p className="text-balance text-sm text-muted-foreground">
					Enter your email below to register your account
				</p>
			</div>
			<div className="grid gap-6">
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

				<div className="flex gap-4">
					{" "}
					<div className="grid gap-2 flex-1">
						{" "}
						<Label htmlFor="firstName">First Name</Label>
						<Input
							id="firstName"
							name="firstName"
							type="firstName"
							value={user.firstName}
							placeholder="Joe"
							onChange={handleChange}
							required
						/>
						<Label htmlFor="city">City</Label>
						<Input
							id="city"
							name="city"
							type="city"
							value={user.city}
							placeholder="City"
							onChange={handleChange}
							required
						/>
					</div>
					<div className="grid gap-2 flex-1">
						<Label htmlFor="lastName">Last Name</Label>
						<Input
							id="lastName"
							name="lastName"
							type="lastName"
							value={user.lastName}
							placeholder="Schmoe"
							onChange={handleChange}
							required
						/>
						<Label htmlFor="state">State</Label>
						<Input
							id="state"
							name="state"
							type="state"
							value={user.state}
							placeholder="State"
							onChange={handleChange}
							required
						/>
					</div>
				</div>

				<div className="grid gap-2">
					<Label htmlFor="postalCode">Zipcode</Label>
					<Input
						id="postalCode"
						name="postalCode"
						type="postalCode"
						placeholder="11111"
						value={user.postalCode}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						name="email"
						type="email"
						value={user.email}
						placeholder="m@example.com"
						onChange={handleChange}
						required
					/>
				</div>

				<div className="grid gap-2">
					<div className="flex items-center">
						<Label htmlFor="password">Password</Label>
					</div>
					<Input
						id="password"
						type="password"
						name="password"
						value={user.password}
						onChange={handleChange}
						required
					/>
				</div>
				<Button type="submit" className="w-full">
					Sign up
				</Button>
				{/* <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
					<span className="relative z-10 bg-background px-2 text-muted-foreground">
						Or continue with
					</span>
				</div>
				<Button variant="outline" className="w-full">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
							fill="Blue"
						/>
					</svg>
					Login with GitHub
				</Button> */}
			</div>
		</form>
	);
}
