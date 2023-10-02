import { Routes, Route } from "react-router-dom";
import Home from "./components/home/index";
import Counter from "./components/counter";
import StopWatch from "./components/stopwatch";
import Filter from "./components/filter";
import ChatBox from "./components/chatBox";
import List from "./components/chatBox/listChat";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/counter" element={<Counter />} />
				<Route path="/stopwatch" element={<StopWatch />} />
				<Route path="/filter" element={<Filter />} />
				<Route path="/chatbox" element={<ChatBox />} />
				<Route path="/list" element={<List />} />
			</Routes>
		</div>
	);
}

export default App;
