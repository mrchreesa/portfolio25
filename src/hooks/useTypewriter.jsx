import { useState, useEffect } from "react";

const useTypewriter = (text, speed = 100, delay = 0) => {
	const [displayText, setDisplayText] = useState("");

	useEffect(() => {
		setDisplayText(""); // Reset text when text prop changes
		let timeoutId;
		let mainTimeout;

		const startTyping = () => {
			let currentIndex = 0;

			const type = () => {
				if (currentIndex < text.length) {
					setDisplayText(text.slice(0, currentIndex + 1));
					currentIndex++;
					timeoutId = setTimeout(type, speed);
				}
			};

			type();
		};

		mainTimeout = setTimeout(startTyping, delay);

		return () => {
			clearTimeout(timeoutId);
			clearTimeout(mainTimeout);
		};
	}, [text, speed, delay]);

	return displayText;
};

export default useTypewriter;
