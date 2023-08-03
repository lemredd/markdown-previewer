import {
	useState,

	type ChangeEvent,
	type ReactElement
} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App(): ReactElement {
	const [content, set_content] = useState<string>("");

	const handle_change = (event: ChangeEvent<HTMLTextAreaElement>): void => set_content(event.target.value);

	return (
		<>
			<div className="editor-container">
				<textarea value={content} id="editor" onChange={handle_change}></textarea>
			</div>
			
			<div className="preview-container">
				<div id="preview">{content}</div>
			</div>
		</>
	);
}

export default App;
