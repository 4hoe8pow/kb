import { type HTMLMotionProps, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface DecryptedTextProps extends HTMLMotionProps<"span"> {
	text: string;
	speed?: number;
	maxIterations?: number;
	sequential?: boolean;
	revealDirection?: "start" | "end" | "center";
	useOriginalCharsOnly?: boolean;
	characters?: string;
	className?: string;
	encryptedClassName?: string;
	parentClassName?: string;
	animateOn?: "view" | "hover" | "both";
}

export default function DecryptedText({
	text,
	speed = 50,
	maxIterations = 10,
	sequential = false,
	revealDirection = "start",
	useOriginalCharsOnly = false,
	characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
	className = "",
	parentClassName = "",
	encryptedClassName = "",
	animateOn = "hover",
	...props
}: DecryptedTextProps) {
	const [displayText, setDisplayText] = useState<string>(text);
	const [isHovering, setIsHovering] = useState<boolean>(false);
	const [isScrambling, setIsScrambling] = useState<boolean>(false);
	const [revealedIndices, setRevealedIndices] = useState<Set<number>>(
		new Set(),
	);
	const [hasAnimated, setHasAnimated] = useState<boolean>(false);
	const containerRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		let interval: number;
		let currentIteration = 0;

		const availableChars = useOriginalCharsOnly
			? Array.from(new Set(text.split(""))).filter((char) => char !== " ")
			: characters.split("");

		const shuffleText = (
			originalText: string,
			currentRevealed: Set<number>,
		): string => {
			if (useOriginalCharsOnly) {
				const positions = originalText.split("").map((char, i) => ({
					char,
					isSpace: char === " ",
					index: i,
					isRevealed: currentRevealed.has(i),
				}));

				const nonSpaceChars = positions
					.filter((p) => !p.isSpace && !p.isRevealed)
					.map((p) => p.char);

				for (let i = nonSpaceChars.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[nonSpaceChars[i], nonSpaceChars[j]] = [
						nonSpaceChars[j],
						nonSpaceChars[i],
					];
				}

				let charIndex = 0;
				return positions
					.map((p) => {
						if (p.isSpace) return " ";
						if (p.isRevealed) return originalText[p.index];
						return nonSpaceChars[charIndex++];
					})
					.join("");
			} else {
				return originalText
					.split("")
					.map((char, i) => {
						if (char === " ") return " ";
						if (currentRevealed.has(i)) return originalText[i];
						return availableChars[
							Math.floor(Math.random() * availableChars.length)
						];
					})
					.join("");
			}
		};

		if (isHovering) {
			setIsScrambling(true);
			interval = setInterval(() => {
				setRevealedIndices((prevRevealed) => {
					if (sequential) {
						// sequentialモードでもmaxIterationsを考慮
						const totalIterations = text.length * maxIterations;
						const currentIterationLocal = currentIteration++;

						if (currentIterationLocal >= totalIterations) {
							clearInterval(interval);
							setIsScrambling(false);
							setDisplayText(text);
							return new Set(Array.from({ length: text.length }, (_, i) => i));
						}

						// 各文字がmaxIterations回シャッフルされた後に確定
						const charsToReveal = Math.floor(
							currentIterationLocal / maxIterations,
						);
						const newRevealed = new Set<number>();
						for (let i = 0; i < charsToReveal && i < text.length; i++) {
							const index =
								revealDirection === "start"
									? i
									: revealDirection === "end"
										? text.length - 1 - i
										: i % 2 === 0
											? Math.floor(text.length / 2) + Math.floor(i / 2)
											: Math.floor(text.length / 2) - Math.floor(i / 2) - 1;
							if (index >= 0 && index < text.length) {
								newRevealed.add(index);
							}
						}

						setDisplayText(shuffleText(text, newRevealed));
						return newRevealed;
					} else {
						setDisplayText(shuffleText(text, prevRevealed));
						currentIteration++;
						if (currentIteration >= maxIterations) {
							clearInterval(interval);
							setIsScrambling(false);
							setDisplayText(text);
						}
						return prevRevealed;
					}
				});
			}, speed);
		} else {
			setDisplayText(text);
			setRevealedIndices(new Set());
			setIsScrambling(false);
		}

		return () => {
			if (interval) clearInterval(interval);
		};
	}, [
		isHovering,
		text,
		speed,
		maxIterations,
		sequential,
		revealDirection,
		characters,
		useOriginalCharsOnly,
	]);

	useEffect(() => {
		if (animateOn !== "view" && animateOn !== "both") return;

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasAnimated) {
					setIsHovering(true);
					setHasAnimated(true);
				}
			});
		};

		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.1,
		};

		const observer = new IntersectionObserver(
			observerCallback,
			observerOptions,
		);
		const currentRef = containerRef.current;
		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) observer.unobserve(currentRef);
		};
	}, [animateOn, hasAnimated]);

	const hoverProps =
		animateOn === "hover" || animateOn === "both"
			? {
					onMouseEnter: () => setIsHovering(true),
					onMouseLeave: () => setIsHovering(false),
				}
			: {};

	return (
		<motion.span
			ref={containerRef}
			className={`inline-block whitespace-pre-wrap ${parentClassName}`}
			{...hoverProps}
			{...props}
		>
			<span className="sr-only">{displayText}</span>

			<span aria-hidden="true">
				{displayText.split("").map((char, index) => {
					const isRevealedOrDone =
						revealedIndices.has(index) || !isScrambling || !isHovering;

					return (
						<span
							key={`${text[index]}-${index}`}
							className={isRevealedOrDone ? className : encryptedClassName}
						>
							{char}
						</span>
					);
				})}
			</span>
		</motion.span>
	);
}
