import { LoginForm } from "@/components/Login-Form";

export default function LoginPage({
	className,
	loggedInUser,
	setLoggedInUser,
}) {
	return (
		<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-sm">
				<LoginForm
					className={className}
					loggedInUser={loggedInUser}
					setLoggedInUser={setLoggedInUser}
				/>
			</div>
		</div>
	);
}
