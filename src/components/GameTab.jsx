import { useState } from "react";

function GameTab() {
	const [userChoice, setUserChoice] = useState(null);
	const [computerChoice, setComputerChoice] = useState(null);
	const [result, setResult] = useState("");

	const choices = ["rock 🗻", "paper 📄", "scissors ✂"];

	const handleUserChoice = (choice) => {
		setUserChoice(choice);
		const randomChoice = choices[Math.floor(Math.random() * choices.length)];
		setComputerChoice(randomChoice);
		determineWinner(choice, randomChoice);
	};

	const determineWinner = (user, computer) => {
		if (user === computer) {
			setResult("IT'S A TIE!");
		} else if (
			(user === "rock 🗻" && computer === "scissors ✂") ||
			(user === "paper 📄" && computer === "rock 🗻") ||
			(user === "scissors ✂" && computer === "paper 📄")
		) {
			setResult("YOU WIN!");
		} else {
			setResult("COMPUTER WINS!");
		}
	};

	return (
		<div className="flex flex-col items-center justify-center text-center">
			<div className="bg-white text-black p-6 flex flex-col gap-4 rounded-md">
				<h1 className="text-2xl pacifico">Choice an option</h1>
				<div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
					{choices.map((choice) => (
						// biome-ignore lint/a11y/useButtonType: <explanation>
						<button
							key={choice}
							className="px-3 py-2 w-[120px] rounded-lg border-slate-400 border-[1px] hover:border-slate-500 hover:shadow-md"
							onClick={() => handleUserChoice(choice)}
						>
							{choice.charAt(0).toUpperCase() + choice.slice(1)}
						</button>
					))}
				</div>
				<div>
					<p>🔰 Your choice: {userChoice}</p>
					<p>💻 Computer's choice: {computerChoice}</p>
				</div>
				<div>
					<p className="text-xl font-semibold reem">{result}</p>
				</div>
			</div>
		</div>
	);
}

export default GameTab;
