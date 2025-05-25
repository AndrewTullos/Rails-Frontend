import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import getUserIdFromToken from "../functions/getToken";

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

export function UploadComponent({
	className,
	loggedInUser,
	setLoggedInUser,
	...props
}) {
	const userId = getUserIdFromToken(loggedInUser);

	const navigate = useNavigate();

	const [file, setFile] = useState(null);
	const [caption, setCaption] = useState("");
	const [errors, setErrors] = useState([]);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!file) {
			setErrors(["Please select a file to upload"]);
			return;
		}

		if (!userId) {
			setErrors(["User ID not found. Please log in again."]);
			return;
		}

		const formData = new FormData();
		formData.append("file", file);

		const metadata = {
			userId: userId,
			caption: caption || "",
		};

		// Convert metadata to a Blob with JSON content type
		const metadataBlob = new Blob([JSON.stringify(metadata)], {
			type: "application/json",
		});

		formData.append("metadata", metadataBlob);

		fetch("http://localhost:8080/api/v1/s3/upload", {
			method: "POST",
			body: formData,
		})
			.then((response) => {
				if (response.status >= 200 && response.status < 300) {
					return response.json().then((data) => {
						navigate("/dashboard");
					});
				} else {
					return response.text().then((text) => {
						setErrors(["Upload failed: " + text]);
					});
				}
			})
			.catch((error) => {
				console.error("Upload error:", error);
				setErrors(["An error occurred during upload"]);
			});
	};

	const handleChange = (event) => {
		const selectedFile = event.target.files[0];
		setFile(selectedFile);
	};

	const handleCaptionChange = (event) => {
		setCaption(event.target.value);
	};

	function handleCancel() {
		navigate("/dashboard");
	}

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">Upload Clip</CardTitle>
					<CardDescription>Post a clip!</CardDescription>
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
								<Label htmlFor="file">Clip Media</Label>
								<Input
									id="file"
									name="file"
									type="file"
									accept="video/*,image/*"
									onChange={handleChange}
									required
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="caption">Caption</Label>
								</div>
								<Input
									id="caption"
									name="caption"
									type="text"
									value={caption}
									onChange={handleCaptionChange}
									placeholder="Enter a caption (optional)"
								/>
							</div>

							<Button type="submit" className="w-full">
								Submit
							</Button>
							<Button
								onClick={handleCancel}
								variant="outline"
								className="w-full"
							>
								Cancel
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
