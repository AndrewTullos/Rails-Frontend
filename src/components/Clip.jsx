import React from "react";
import { Link } from "react-router-dom";
import { Heart, MessageCircle } from "lucide-react";

function Clip({ clip }) {
	const { id, content, thumbnail, likes = 0, comments = 0 } = clip;

	return (
		<div key={clipId}>
			<video controls src={mediaUrl} width="320" height="240" />
			<p>{caption}</p>
		</div>
	);
}

export default Clip;
