import React from "react";

function NavBar() {
	return (
		<nav className="flex flex-col sm:flex-row items-center justify-between py-2 px-6">
			<div className="flex gap-2 items-center">
				<h1 className="font-semibold dmsans">Made by Yam</h1>
			</div>
			<h1 className="text-2xl pacifico">Rock, Paper, Scissors</h1>
		</nav>
	);
}

export default NavBar;
