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
			<header>
				<h1>Markdown Previewer</h1>
				<section className="info">
					Made with 💓 +  <img src={reactLogo} height={24} alt="react logo"/>
				</section>
			</header>
			<div className="container">
				<Editor content={content} on_change={handle_change} />
				<Preview content={content} />
			</div>
		</>
	);
}

export default App;
