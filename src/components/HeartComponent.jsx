import { useState } from "react";
import { Heart, MessageCircle } from "lucide-react";

function HeartButton() {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		setIsClicked(!isClicked);
	};

	return (
		<button onClick={handleClick}>
			{isClicked ? (
				<Heart
					className="h-4 w-4"
					size={64}
					color="red"
					strokeWidth={2}
					fill="red"
				/>
			) : (
				<Heart
					className="h-4 w-4"
					size={64}
					color="currentColor"
					strokeWidth={2}
				/>
			)}
		</button>
	);
}

export default HeartButton;
