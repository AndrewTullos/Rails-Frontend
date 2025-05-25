import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StarsCanvas from "./components/StarBackground";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<StarsCanvas />
		<App />
	</StrictMode>
);
