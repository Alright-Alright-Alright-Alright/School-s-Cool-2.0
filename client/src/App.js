import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));

function App() {
	return (
		<div className="App">
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</Suspense>
		</div>
	);
}

export default App;
