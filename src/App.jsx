import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import UploadClipPage from "./pages/UploadClipPage";

import ProfilePage from "./pages/ProfilePage";

// ShadCN
import { ThemeProvider } from "@/components/theme-provider";

function App() {
	const [loggedInUser, setLoggedInUser] = useState(null);
	const [hasFinishedCheckingLocalStorage, setHasFinishedCheckingLocalStorage] =
		useState(false);

	useEffect(() => {
		if (localStorage.getItem("loggedInUser") !== undefined) {
			setLoggedInUser(JSON.parse(localStorage.getItem("loggedInUser")));
		}
		setHasFinishedCheckingLocalStorage(true);
	}, []);

	if (!hasFinishedCheckingLocalStorage) {
		return null;
	}

	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="min-h-screen w-full">
				<Router>
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route
							path="/login"
							element={
								<LoginPage
									loggedInUser={loggedInUser}
									setLoggedInUser={setLoggedInUser}
								/>
							}
						/>
						<Route
							path="/signup"
							element={
								<SignupPage
									loggedInUser={loggedInUser}
									setLoggedInUser={setLoggedInUser}
								/>
							}
						/>
						<Route
							path="/dashboard"
							element={
								<DashboardPage
									loggedInUser={loggedInUser}
									setLoggedInUser={setLoggedInUser}
								/>
							}
						/>

						<Route
							path="/upload"
							element={
								<UploadClipPage
									loggedInUser={loggedInUser}
									setLoggedInUser={setLoggedInUser}
								/>
							}
						/>

						<Route
							path="/profile/:profileId"
							element={
								<ProfilePage
									loggedInUser={loggedInUser}
									setLoggedInUser={setLoggedInUser}
								/>
							}
						/>

						<Route path="/*" element={<NotFoundPage />} />
					</Routes>
				</Router>
			</div>
		</ThemeProvider>
	);
}

export default App;
