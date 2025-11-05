import { useEffect, useRef, useState } from "react";

export interface ScrollFadeOptions {
	threshold?: number;
	once?: boolean;
}

export interface ScrollFadeHandle {
	ref: React.RefObject<HTMLElement | null>;
	visible: boolean;
}

export const useScrollFade = (
	options: ScrollFadeOptions = {},
): ScrollFadeHandle => {
	const { threshold = 0.1, once = true } = options;
	const ref = useRef<HTMLElement | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setVisible(true);
						if (once) {
							observer.unobserve(entry.target);
						}
					}
				}
			},
			{ threshold },
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, [threshold, once]);

	return { ref, visible };
};
