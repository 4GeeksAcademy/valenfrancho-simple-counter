import React from "react";
import SimpleCounter from "./simple-counter"
import Timer from "./timer"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<SimpleCounter/>
			<Timer/>
		</div>
	);
};

export default Home;
