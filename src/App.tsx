import { ReactElement, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App(): ReactElement {
	const [count, set_count] = useState(0);

	return (
		<>
			<div className="editor-container">
				<textarea id="editor"></textarea>
			</div>
		</>
	);
}

export default App;
