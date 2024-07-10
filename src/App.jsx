import { useState } from "react";
import NavBar from "./components/NavBar";
import GameTab from "./components/GameTab";

function App() {
	const [theme, setTheme] = useState("light");

	const changeTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<div
			className={`w-screen h-screen ${
				theme === "light"
					? "bg-slate-200 && duration-300"
					: "bg-zinc-900 && text-white && duration-300"
			}`}
		>
			<NavBar />
			<GameTab />

			<footer className="md:fixed md:bottom-0 md:left-0 md:right-0 p-4 flex justify-center sm:justify-normal">
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button
					className={`${
						theme === "light" ? "bg-black text-white" : "bg-white text-black"
					} px-3 py-2 rounded-lg hidden md:block`}
					onClick={changeTheme}
				>
					Change Theme 🌙
				</button>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button
					className={`${
						theme === "light"
							? "bg-black text-white"
							: "bg-slate-200 text-black"
					} px-3 py-2 rounded-lg md:hidden block`}
					onClick={changeTheme}
				>
					🌙 ☀
				</button>
			</footer>
		</div>
	);
}

export default App;
