import {
	useState,

	type ChangeEvent,
	type ReactElement
} from "react";

import { DEFAULT_CONTENT_VALUE } from "./constants";

import Editor from "./components/Editor";
import Preview from "./components/Preview";

import "./App.css";
import reactLogo from "./assets/react.svg";

function App(): ReactElement {
	const [content, set_content] = useState<string>(DEFAULT_CONTENT_VALUE);
	const handle_change = (event: ChangeEvent<HTMLTextAreaElement>): void => set_content(event.target.value);

	return (
		<>
			<Editor content={content} on_change={handle_change} />
			<Preview content={content} />
		</>
	);
}

export default App;
