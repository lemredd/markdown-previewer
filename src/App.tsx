import DOMPurify from "dompurify";
import { mangle } from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { marked, type MarkedExtension } from "marked";
import {
	useRef, useState,

	type ChangeEvent,
	type ReactElement
} from "react";

import "./App.css";
import reactLogo from "./assets/react.svg";

marked.use(mangle() as MarkedExtension);
marked.use(gfmHeadingId() as MarkedExtension);

function App(): ReactElement {
	const [content, set_content] = useState<string>("");
	const handle_change = (event: ChangeEvent<HTMLTextAreaElement>): void => set_content(event.target.value);
	const preview = useRef<HTMLDivElement>(null);

	return (
		<>
			<div className="editor-container">
				<textarea value={content} id="editor" onChange={handle_change}></textarea>
			</div>
			
			<div className="preview-container">
				<div id="preview" ref={preview}></div>
			</div>
		</>
	);
}

export default App;
