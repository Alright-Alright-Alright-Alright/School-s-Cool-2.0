import React from "react";
import Dashcard from "../../core/dashcard/Dashcard";

const dummyData = [
	[{ titleTest: "test", comment: ["1", "2", "3"], user: ["1", "2", "3"] }],
	[{ titleTest: "test2", comment: ["1"], user: ["1", "2", "3"] }],
	[
		{
			titleTest: "test3",
			date: "02-01-2021",
			comment: [["1", "2"]],
			user: ["1", "2", "3"],
		},
	],
	[{ titleTest: "test4", comment: [["1", "2"]], user: ["1", "2", "3"] }],
	[
		{
			titleTest: "test5",
			date: "02-01-2021",
			comment: [["1", "2"]],
			user: ["1", "2", "3"],
		},
	],
	[{ titleTest: "test6", comment: [["1", "2"]], user: ["1", "2", "3"] }],
];

function DashCardsLeft() {
	return (
		<div>
			<Dashcard
				dashCardData={dummyData}
				dashCardTitle="Testing"
				dashCardStyle="bg-aqua"
			/>
			<Dashcard
				dashCardData={dummyData}
				dashCardTitle="Testing"
				dashCardStyle="bg-yellow"
			/>{" "}
			<Dashcard
				dashCardData={dummyData}
				dashCardTitle="Testing"
				dashCardStyle="bg-grey-dark"
			/>{" "}
		</div>
	);
}

export default DashCardsLeft;
