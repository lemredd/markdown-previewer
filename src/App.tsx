import DOMPurify from "dompurify";
import { mangle } from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { marked, type MarkedExtension } from "marked";
import {
	useEffect, useRef, useState,

	type ChangeEvent,
	type ReactElement
} from "react";

import "./App.css";
import reactLogo from "./assets/react.svg";

marked.use(mangle() as MarkedExtension);
marked.use(gfmHeadingId() as MarkedExtension);

const DEFAULT_CONTENT_VALUE = `
# Welcome to Markdown Previewer!
## Created by [Lem Redd](https://www.github.com/lemredd)

Try editing the editor to see the **magic** happen!
Here are some sample markdown elements you can use:

### Inline code
\`code\`

### Code block
\`\`\`javascript
	const msg = "Hello Javascript!";
\`\`\`

### List items
- Item #1
- Item #2
- Item #3

### Blockquotes
> "I code, therefore I am." - Rene DesCodes

### Image
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App(): ReactElement {
	const [content, set_content] = useState<string>(DEFAULT_CONTENT_VALUE);
	const handle_change = (event: ChangeEvent<HTMLTextAreaElement>): void => set_content(event.target.value);
	const preview = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (preview.current) preview.current.innerHTML = DOMPurify.sanitize(marked.parse(content));
	}, [content]);

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
